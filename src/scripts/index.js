"use strict";

import "../styles/index.scss";
import fetchGIF from "./giphy.js";
console.log("Hello Rollup, this is a change");
const search = document.querySelector(".search");

//get the input value
const searchInput = document.querySelector(".search__field");

// - This file should handle your application's logic such as adding images to the gallery.

search.addEventListener("submit", event => {
  event.preventDefault();

  fetchGIF(searchInput.value);
});
