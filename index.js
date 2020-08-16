"use strict";

const apiKey = "OABj953aUhLX65ddNYahUSeyUUbuRjquhvhoPFgX";
const searchUrl = "https://developer.nps.gov/api/v1/parks";

//displays up to max results for given states
function displayResults(responseJson) {
  console.log("display results");
  console.log(responseJson);
  $(".search-results").empty();
  for (let i = 0; i < responseJson.data.length; i++) {
    $(".search-results").append(`<li>
    <h3>${responseJson.data[i].fullName}</h3>
    <p>${responseJson.data[i].description}</p>
    <a href="${responseJson.data[i].url}">${responseJson.data[i].url}</a>
    </li>`);
  }
  $(".results").removeClass("hidden");
}

//<img src="${responseJson.data[i].images[1].url}" alt="first-gallery-image">


//calls fetch function for National Parks API
function getParks() {
  console.log("get parks");
  const searchTerm = $("#js-search-term").val();
  const resultMax = $("#js-max-results").val();
  fetch(
    `https://developer.nps.gov/api/v1/parks?stateCode=${searchTerm}&api_key=OABj953aUhLX65ddNYahUSeyUUbuRjquhvhoPFgX&limit=${resultMax}`
  )
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson));
}

//detects when the search function is enagaged
function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    console.log("watchform");
    getParks();
  });
}

$(watchForm);

