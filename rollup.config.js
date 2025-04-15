import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default [
  // Configuration for index.ts
  {
    plugins: [nodeResolve(), typescript()],
    input: "src/index.ts",
    output: {
      plugins: [terser()],
      dir: "dist",
      format: "iife",
      sourcemap: true,
    }
  },
  // Configuration for Main.ts
  {
    plugins: [nodeResolve(), typescript()],
    input: "src/Main.ts",
    output: {
      plugins: [terser()],
      dir: "dist", 
      format: "iife",
      sourcemap: true,
    }
  }
];