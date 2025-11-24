

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
   // country.innerHTML = `<li>${countryD[0].name.common}</li>`
    countryD[0].name.common
   
}
countryData('Albania')
// get all
async function fetchALLData() {
    const respond = await fetch(`https://restcountries.com/v3.1/all?fields=name,capital,region,languages,flags,population,currencies`);
    // need up to 10 fields
    const data = await respond.json();
    return data;
}
fetchALLData().then(countries =>{
    const container = document.getElementById('countries-container')
    countries.forEach(element => {
        const card = createCards(element)
        container.appendChild(card)
    });
})
function createCards(country){
    const columns = document.createElement('div')
    columns.className='col-12 col-md-6 col-lg-3 mb-4'

    const card = document.createElement('div')
    card.className = 'card shadow-lg p-2 bg-light rounded-4 h-100'
    card.style.width = '100%';

    card.innerHTML = `<div class="card_image h-100">
                        <img class="card-img-top w-100 rounded-3" src="${country.flags.png}" alt="${country.name.common}">
                     </div>
                     <div class="card-body">
                        <h5 class="card-title fs-4 fw-semibold">${country.name.common}</h5>
                        <p class="card-text fs-8 text-body-secondary">Population: ${country.population.toLocaleString()}</p>
                        <p class="card-text fs-8 text-body-secondary">Region: ${country.region}</p>
                        <p class="card-text fs-8 text-body-secondary">Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
                     </div>
                    `
        columns.appendChild(card)
        return columns
}


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
