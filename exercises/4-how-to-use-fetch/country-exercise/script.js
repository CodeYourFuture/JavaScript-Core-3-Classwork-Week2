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
    "https://restcountries.com/v3.1/name/Great%20Britain"
  );

  /** Remove this line when you have completed the task

    getData("https://restcountries.com/v3.1/name/France");

    getData("https://restcountries.com/v3.1/name/Germany");

    getData("https://restcountries.com/v3.1/name/Spain");

    getData("https://restcountries.com/v3.1/name/Portugal");

    getData("https://restcountries.com/v3.1/name/Hungary");

    getData("https://restcountries.com/v3.1/name/Russia");

    */ // Remove this line when you have completed the task
}

window.onload = onLoad;
