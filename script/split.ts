import fs from "node:fs";
import path from "node:path";
import functions from "../functions.json";

const outdir = path.join(__dirname, "../functions");
if (!fs.existsSync(outdir)) {
    fs.mkdirSync(outdir);
}

for (const [name, func] of Object.entries(functions)) {
    const [namespace, type, ...rest] = name.split("_");
    const method = rest.join("_");
    const out = path.join(outdir, `${namespace}/${type}/${method}.json`);
    if (!fs.existsSync(path.dirname(out))) {
        fs.mkdirSync(path.dirname(out), { recursive: true });
    }

    fs.writeFileSync(
        out,
        JSON.stringify(
            func,
            (k, v) => {
                if (typeof v === "string") {
                    return v
                        .split("\n")
                        .map((s) => s.trim())
                        .join("\n");
                }
                return v;
            },
            4
        )
    );
}
