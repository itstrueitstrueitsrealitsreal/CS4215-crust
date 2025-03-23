import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
    plugins: [nodeResolve(), typescript()],
    // input: "src/index.ts",
    input: "src/Main.ts",
    output: {
        plugins: [terser()],
        dir: "dist",
        format: "iife",
        sourcemap: true,
    }
}
