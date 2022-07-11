/**
 * usage:
 *  deno run -A scripts/build_npm.ts <version-tag>
 *  cd npm
 *  npm publish
 */

import { build, emptyDir } from "https://deno.land/x/dnt@0.28.0/mod.ts";

await emptyDir("./npm");

await build({
  typeCheck: false,
  test: false,
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
    custom: [
      // shim for fetch
      {
        package: {
          name: "node-fetch",
          version: "~3.1.0",
        },
        globalNames: [
          {
            // for the `fetch` global...
            name: "fetch",
            // use the default export of node-fetch
            exportName: "default",
          },
          {
            name: "RequestInit",
            typeOnly: true, // only used in type declarations
          },
        ],
      },
    ],
  },
  package: {
    // package.json properties
    name: "riot-api",
    version: Deno.args[0],
    description: "Provides functions and response types to interact with the Riot API.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/udon-code-studios/riot-api.git",
    },
    bugs: {
      url: "https://github.com/udon-code-studios/riot-api/issues",
    },
  },
});

// post build steps
// Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
