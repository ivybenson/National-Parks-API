"use strict";

const apiKey = "OABj953aUhLX65ddNYahUSeyUUbuRjquhvhoPFgX";
const searchUrl = "https://developer.nps.gov/api/v1/parks";

//formats the search options
function formatSearch() {
  console.log("FORMAT");
}

//displays up to max results for given states
function displayResults(responseJson) {
  console.log("display results");
  $(".search-results").empty();
  $(".results").removeClass("hidden");
  for (let i = 0; i < responseJson.length; i++) {
    $("#search-results").append(`<li>
    <h3>${responseJson.items[i].fullName}</h3>
    <p>${responseJson.items[i].description}</p>
    <a href="${responseJson.items[i].url}">${responseJson.items[i].url}</a>
    </li>`);
  }
}

//parks?stateCode=MN&api_key=OABj953aUhLX65ddNYahUSeyUUbuRjquhvhoPFgX

//calls fetch function for National Parks API
function getParks() {
  console.log("get parks");
  const searchTerm = $("#js-search-term").val();
  fetch(
    `https://developer.nps.gov/api/v1/parks?stateCode=${searchTerm}&api_key=OABj953aUhLX65ddNYahUSeyUUbuRjquhvhoPFgX`
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
    //displayResults();
    formatSearch();
  });
}

$(watchForm);
