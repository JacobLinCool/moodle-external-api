import fs from "node:fs";
import path from "node:path";

type FunctionDefinition = {
	name: string;
	parameters_desc: Description;
	returns_desc: Description;
	description: string;
};

interface PrimativeDescription {
	desc: string;
	type: string;
	allownull?: boolean;
	required?: number;
	default?: unknown;
}

interface ArrayDescription {
	desc: string;
	required?: number;
	default?: unknown;
	content: Description;
}

interface ObjectDescription {
	desc: string;
	required?: number;
	default?: unknown;
	keys: Record<string, Description>;
}

type Description = PrimativeDescription | ArrayDescription | ObjectDescription;

function camelfy(str: string): string {
	return (
		str[0].toUpperCase() +
		str.slice(1).replace(/(_\w)/g, (m) => m[1].toUpperCase())
	);
}

function translate_type(type: string): string {
	let ts: string;
	switch (type) {
		case "int":
		case "float":
			ts = "number";
			break;
		case "bool":
			ts = "boolean";
			break;
		case "alpha":
		case "alphaext":
		case "text":
		case "raw":
		case "url":
		case "alphanum":
		case "alphanumext":
		case "plugin":
		case "safedir":
		case "component":
		case "notags":
		case "username":
		case "raw_trimmed":
		case "localurl":
		case "file":
		case "path":
		case "tag":
		case "theme":
		case "area":
		case "cleanhtml":
		case "stringid":
		case "capability":
		case "auth":
		case "lang":
		case "timezone":
		case "safepath":
		case "clean":
		case "email":
			ts = "string";
			break;
		default:
			throw new Error(`Unknown type: ${type}`);
	}

	return ts;
}

class Builder {
	protected content = "";

	public build(name: string, desc: Description | null): string {
		this.content = "";
		this._build(name, desc);
		return this.content;
	}

	protected _build(name: string, desc: Description | null): string {
		if (desc === null) {
			return "null";
		} else if ("content" in desc) {
			return this.array(name, desc);
		} else if ("keys" in desc) {
			return this.object(name, desc);
		} else if ("type" in desc && typeof desc.type === "string") {
			return this.primative(desc);
		} else {
			throw new Error(`Unknown type: ${desc.type}`);
		}
	}

	protected primative(description: PrimativeDescription): string {
		const ts = translate_type(description.type);
		return description.allownull ? `(${ts} | null)` : ts;
	}

	protected array(name: string, description: ArrayDescription): string {
		const ts = name + "Item";
		const item = this._build(ts, description.content);
		let out = description.desc ? `/**\n * ${description.desc}\n */\n` : "";
		out += `export type ${name} = ${item}[];\n\n`;
		this.content += out;
		return name;
	}

	protected object(name: string, description: ObjectDescription): string {
		let out = description.desc ? `/**\n * ${description.desc}\n */\n` : "";
		out += `export interface ${name} {\n`;
		for (const [key, desc] of Object.entries(description.keys)) {
			const ts = this._build(name + camelfy(key), desc);
			const required = desc.required ? "" : "?";
			if (desc.desc) {
				out += `    /** ${desc.desc.replace(/\n/g, " ")} */\n`;
			}
			out += `    ${key}${required}: ${ts};\n`;
		}
		out += "}\n\n";
		this.content += out;
		return name;
	}
}

function make(raw: string): string {
	const builder = new Builder();
	const def: FunctionDefinition = JSON.parse(raw);
	const params = builder.build(
		camelfy(def.name) + "Params",
		def.parameters_desc,
	);
	const returns = builder.build(
		camelfy(def.name) + "Returns",
		def.returns_desc,
	);

	return params + "\n" + returns;
}

const root = path.resolve(__dirname, "..", "..", "functions");
const typescript_root = path.resolve(__dirname, "..", "..", "typescript");
const namespaces = fs
	.readdirSync(root, { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => d.name);
for (const namespace of namespaces) {
	const types = fs
		.readdirSync(path.join(root, namespace), { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => d.name);
	for (const type of types) {
		const definitions = fs
			.readdirSync(path.join(root, namespace, type))
			.filter((d) => d.endsWith(".json"))
			.map((d) => path.join(root, namespace, type, d));
		for (const definition of definitions) {
			console.log("Translating", definition, "to typescript");
			const json = fs.readFileSync(definition, "utf-8");
			const ts = make(json);
			const out = path.join(
				typescript_root,
				namespace,
				type,
				path.basename(definition, ".json") + ".ts",
			);
			if (!fs.existsSync(path.dirname(out))) {
				fs.mkdirSync(path.dirname(out), { recursive: true });
			}
			fs.writeFileSync(out, ts);
			console.log("Wrote", out);
		}
	}
}
