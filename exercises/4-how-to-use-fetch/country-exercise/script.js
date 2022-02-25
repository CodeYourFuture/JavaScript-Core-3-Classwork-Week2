// This function should retrieve the JSON from the `countryURL` and then call onCountryDataReceived() with the JSON
function getData(countryURL) {}

function onCountryDataReceived(country) {
  addCountryName(country);
  addCountryCapital(country);
  addNameInOtherLanguages(country);
}

// This function should take the JSON for the country and put a H1 tag on the screen containing its name
function addCountryName(countryData) {}

// This function should take the JSON for the country and put a H2 tag on the screen containing its capital city
function addCountryCapital(countryData) {}

// This function should take the JSON for the country and put UL and LI tags on the screen with the countries name translated into other languages
function addNameInOtherLanguages(countryData) {}

function getContentDiv() {
  return document.querySelector("#content");
}

function onLoad() {
  getData(
    "https://restcountries.eu/rest/v2/name/Great%20Britain?fullText=true"
  );

  /** Remove this line when you have completed the task

    getData("https://restcountries.eu/rest/v2/name/France?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Germany?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Spain?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Portugal?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Hungary?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Russia?fullText=true");

    */ // Remove this line when you have completed the task
}

window.onload = onLoad;
