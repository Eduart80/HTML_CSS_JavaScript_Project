

const country = document.getElementById('country')
const button = document.getElementById('searchBtn')
const searchInput = document.getElementById('search')
const img = document.getElementById('country-flag');

button.addEventListener('click', () => {
    let input = searchInput.value;
    console.log(input);
});

async function countryData(params) {
    const countryD = await fetchData(params)
    country.textContent = `<li>${countryD[0].name.common}</li>`
    countryD[0].name.common
   
}
countryData('Albania')
// get all
async function fetchALLData() {
    const respond = await fetch(`https://restcountries.com/v3.1/all?fields=name,capital,region,languages,flags,population,currencies`);
    // need up to 10 fields
    const data = await respond.json();
    return data[0];
}
fetchALLData().then(counties =>{
    
})



// fetchData by id
async function fetchData(param) {
    const respond = await fetch(`https://restcountries.com/v3.1/name/${param}`);
    const data = await respond.json();
    return data;
}

// "name.common" for name
//  "capital": 
// "region"
// "languages" "sqi"
//  "flags":  "png": "https://flagcdn.com/w320/al.png",
// flags     "svg": "https://flagcdn.com/al.svg",

// "population":
// "currencies""ALL": 
// currencies "name": 
