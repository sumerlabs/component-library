import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import css from "rollup-plugin-import-css";
import copy from 'rollup-plugin-copy';
import sass from 'rollup-plugin-sass';
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    copy({
      targets: [
        { src: 'src/styles/icons.css', dest: 'lib/styles' },
        { src: 'src/styles/icomoon-font.dev.css', dest: 'lib/styles' },
        { src: 'src/styles/icomoon-font.prod.css', dest: 'lib/styles' },
      ]
    }),
    css(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
      exclude: ['./src/styles/icomoon-font.prod.css', './src/styles/icomoon-font.dev.css'],
    }),
    typescript({ useTsconfigDeclarationDir: true }),
  ]
};