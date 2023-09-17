import fs from "node:fs";
import path from "node:path";
import type {
	FunctionDefinition,
	Description,
	PrimativeDescription,
	ArrayDescription,
	ObjectDescription,
} from "./types";

const MARK_ALL_OPTIONAL = !!process.env.MARK_ALL_OPTIONAL;
const MOODLE_RS = !!process.env.MOODLE_RS;

function snakefy(str: string): string {
	return str.replace(/[A-Z]/g, (letter) => "_" + letter.toLowerCase());
}

function camelfy(str: string): string {
	return (
		str[0].toUpperCase() +
		str.slice(1).replace(/(_\w)/g, (m) => m[1].toUpperCase())
	);
}

function translate_type(type: string): string {
	let rs: string;
	switch (type) {
		case "int":
			rs = "i64";
			break;
		case "float":
			rs = "f64";
			break;
		case "bool":
			rs = "bool";
			break;
		default:
			rs = "String";
			break;
	}

	return rs;
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
		const rs = translate_type(description.type);
		return MARK_ALL_OPTIONAL || description.allownull
			? `Option<${rs}>`
			: rs;
	}

	protected array(name: string, description: ArrayDescription): string {
		const rs = camelfy(name) + "Item";
		const item = this._build(rs, description.content);
		let out = description.desc
			? description.desc
					.split("\n")
					.map((d) => `/// ${d}\n`)
					.join("\n")
			: "";
		out += `pub type r#${camelfy(name)} = Vec<${item}>;\n\n`;
		this.content += out;
		return camelfy(name);
	}

	protected object(name: string, description: ObjectDescription): string {
		name = camelfy(name);
		let out = description.desc
			? description.desc
					.split("\n")
					.map((d) => `/// ${d}\n`)
					.join("\n")
			: "";
		out += `#[derive(Serialize, Deserialize, Debug)]\n`;
		out += `pub struct ${name} {\n`;
		for (const [key, desc] of Object.entries(description.keys)) {
			const rs = this._build(`${name}_${key}`, desc);
			if (desc.desc) {
				out += `    /// ${desc.desc.replace(/\n/g, " ")}\n`;
			}
			out += `    #[serde(rename = "${key}")]\n`;
			let new_key = snakefy(key);
			if (new_key.match(/^[0-9]/)) {
				new_key = `n${new_key}`;
			}
			out += `    pub r#${new_key}: ${rs},\n`;
		}
		out += "}\n\n";
		this.content += out;
		return name;
	}
}

function make(raw: string): string {
	const builder = new Builder();
	const def: FunctionDefinition = JSON.parse(raw);
	const params_type = "Params";
	const params = builder.build(params_type, def.parameters_desc);
	const returns_type = "Returns";
	const returns = builder.build(returns_type, def.returns_desc);

	const call = `
pub async fn call<'a>(
	client: &'a mut crate::client::MoodleClient,
	params: &'a mut ${params_type},
) -> anyhow::Result<${returns_type}> {
	let json = client
		.post(
			"${def.name}",
			params,
		)
		.await?;

	serde_json::from_value(json).map_err(|e| e.into())
}`;

	return (
		params +
		"\n" +
		returns +
		(params && returns && MOODLE_RS ? "\n" + call : "")
	);
}

const root = path.resolve(__dirname, "..", "..", "functions");
const rust_root = path.resolve(__dirname, "..", "..", "rust");

function esc(str: string): string {
	const list = ["mod", "self"];
	if (list.includes(str)) {
		return str + "_";
	}
	return str;
}

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
			console.log("Translating", definition, "to Rust");
			const json = fs.readFileSync(definition, "utf-8");
			const rs =
				`use serde::{Deserialize, Serialize, self};\n\n` + make(json);
			const filename = path.basename(definition).replace(".json", "");
			const out = path.join(
				rust_root,
				esc(namespace),
				esc(type),
				filename + ".rs",
			);

			if (!fs.existsSync(path.dirname(out))) {
				fs.mkdirSync(path.dirname(out), {
					recursive: true,
				});
			}
			fs.writeFileSync(out, rs);
			console.log("Wrote", out);
		}

		// Write the mod.rs file
		const mod_path = path.join(
			rust_root,
			esc(namespace),
			esc(type),
			"mod.rs",
		);
		fs.writeFileSync(
			mod_path,
			definitions
				.map(
					(d) =>
						`pub mod r#${esc(
							path.basename(d).replace(".json", ""),
						)};`,
				)
				.join("\n"),
		);
		console.log("Wrote", mod_path);
	}

	// Write the mod.rs file
	const mod_path = path.join(rust_root, esc(namespace), "mod.rs");
	fs.writeFileSync(
		mod_path,
		types.map((d) => `pub mod r#${esc(d)};`).join("\n"),
	);
	console.log("Wrote", mod_path);
}

// Write the mod.rs file
const mod_path = path.join(rust_root, "mod.rs");
fs.writeFileSync(
	mod_path,
	namespaces.map((d) => `pub mod r#${esc(d)};`).join("\n"),
);
