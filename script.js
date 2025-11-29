"use strict"
import {NetworkError, DataError} from './errorClass.js'

// get all
export async function fetchALLData() {
    let data
    try{
    const respond = await fetch(`https://restcountries.com/v3.1/all?fields=name,capital,region,languages,flags,population,currencies`);
         data = await respond.json();
         console.log(data);
         
    }catch(e){
        if (e instanceof NetworkError) {
                    console.error('Network error:', e.message);
                } else if (e instanceof DataError) {
                    console.error('Data error:', e.message);
                } else {
                    console.error('Unknown error:', e);
                }
    }
    return data;
}

fetchALLData().then(countries =>{
    const container = document.getElementById('countries-container')
    countries.forEach(element => {
        const card = createCards(element)
        container.appendChild(card)
    });
})
export function createCards(country){
    const columns = document.createElement('div')
    columns.className='col-12 col-md-6 col-lg-3 mb-4'

    const card = document.createElement('div')
    card.className = 'card shadow-lg p-2 my-card bg-light rounded-4 h-100'
    card.style.width = '100%';
    card.style.cursor = 'pointer'
    card.setAttribute('aria-label', `View details for ${country.name.common}`);
    card.addEventListener('click', () => {
    window.location.href = `details.html?country=${encodeURIComponent(country.name.common)}`;
    })

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
