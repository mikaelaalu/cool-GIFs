"use strict";
//- This file should only handle the API calls against Giphy's API and return data.

// source
const APIkey = process.env.GIPHY_API_KEY;

//get the input value
const searchInput = document.querySelector(".search__field");

// Fetch GIFs with your API key and search query.
function fetchGIF(searchInput) {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${searchInput}`
  )
    .then(response => response.json()) // Parse the JSON data.
    .then(response => {
      // Fetch first image from the data array and create an image element.

      const gallery = document.querySelector(".gallery");

      let image = `<a class="gallery__item"><img src="${response.data[0].images.downsized.url}"></a>`;
      console.log(image);

      gallery.innerHTML = image;
    });
}

export default fetchGIF;
