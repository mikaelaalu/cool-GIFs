import browsersync from "rollup-plugin-browsersync";

// ES6
import { terser } from "rollup-plugin-terser";

// rollup.config.js
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";

import postcssNormalize from "postcss-normalize";

import autoprefixer from "autoprefixer";

import babel from "rollup-plugin-babel";

import resolve from "@rollup/plugin-node-resolve";

import commonjs from "@rollup/plugin-commonjs";

import filesize from "rollup-plugin-filesize";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = isProduction === false;

export default {
  input: "src/scripts/index.js",
  output: {
    file: "public/giphy.js",
    format: "iife"
  },

  plugins: [
    commonjs(),
    babel(),
    resolve(),
    isProduction && filesize(),
    isDevelopment && browsersync({ server: "public" }),
    isProduction && terser(),
    postcss({
      extract: true,
      plugins: [
        postcssNormalize(/* pluginOptions */),
        autoprefixer(),
        cssnano()
      ],
      sourceMap: isDevelopment
    })
  ]
};
