const browsersync = require("rollup-plugin-browsersync");
// const terser = require("rollup-plugin-terser");

// ES6
import { terser } from "rollup-plugin-terser";

// rollup.config.js
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";

// const postcss = require("postcss");
const postcssNormalize = require("postcss-normalize");

const autoprefixer = require("autoprefixer");

// new way but i do it old way

// export default {
//   plugins: [
//     postcss({
//       plugins: []
//     })
//   ]
// };

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = isProduction === false;

module.exports = {
  input: "src/scripts/index.js",
  output: {
    file: "public/giphy.js",
    format: "iife"
  },

  plugins: [
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
// // ES6
// import browsersync from 'rollup-plugin-browsersync'

// export default {
//   input: 'src/scripts/index.js',
//   output: {
//     file: 'public/giphy.js'
//     format: "iife"
//   },
//   plugins: [
//     browsersync({server: 'public'})
//   ]
// }
