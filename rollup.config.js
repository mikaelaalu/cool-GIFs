const browsersync = require("rollup-plugin-browsersync");
// const terser = require("rollup-plugin-terser");

// ES6
import { terser } from "rollup-plugin-terser";

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
    isProduction && terser()
  ]
};

// ES6
// import browsersync from 'rollup-plugin-browsersync'
//
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
