// This function should retrieve the JSON from the `countryURL` and then call onCountryDataReceived() with the JSON
function getData(countryURL) {
  console.log(countryURL);
  fetch(countryURL)
    .then((response) => response.json())
    .then((headlines) => {
      console.log(headlines);
      onCountryDataReceived(headlines);
    })
    //If something goes wrong
    .catch((error) => console.log(error));
    
}

function onCountryDataReceived(country) {
  addCountryName(country);
  addCountryFlag(country);
  addCountryCapital(country);
  addNameInOtherLanguages(country);
  
}

// This function should take the JSON for the country and put a H1 tag on the screen containing its name

function addCountryName(countryData) {
let h1El = document.createElement("h1");
 h1El.innerText = countryData[0].name.common;
 getContentDiv().appendChild(h1El);
}

// This function should take the JSON for the country and put a H2 tag on the screen containing its capital city

function addCountryCapital(countryData) {
  let h2El = document.createElement("h2");
   h2El.innerText = countryData[0].capital;
   getContentDiv().appendChild(h2El);
}

// This function should take the JSON for the country and put UL and LI tags on the screen with the countries name translated into other languages

function addNameInOtherLanguages(countryData) {

console.log(
  Object.values(countryData[0].translations),
  "length of translations"
);

   const translations = Object.values(countryData[0].translations);
   let ulEl = document.createElement("ul");
   getContentDiv().appendChild(ulEl);
   for(let i = 0; i < translations.length; i++){
     let liEl = document.createElement("li");
     ulEl.appendChild(liEl);
     liEl.innerHTML = translations[i].official;
   }

}

function addCountryFlag(countryData) {
  let imgEl = document.createElement("img");
  imgEl.src = countryData[0].flags.png;
  getContentDiv().appendChild(imgEl);
}


function getContentDiv() {
  return document.querySelector("#content");
}

function onLoad() {
  getData("https://restcountries.com/v3.1/name/Great%20Britain");
  

    // getData("https://restcountries.com/v3.1/name/France");

    // getData("https://restcountries.com/v3.1/name/Germany");

    // getData("https://restcountries.com/v3.1/name/Spain");

    // getData("https://restcountries.com/v3.1/name/Portugal");

    // getData("https://restcountries.com/v3.1/name/Hungary");

    // getData("https://restcountries.com/v3.1/name/Russia");

    // getData("https://restcountries.com/v3.1/name/Turkey");

}

window.onload = onLoad;
