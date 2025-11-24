"use strict"
import { fetchALLData, createCards } from "./script.js"

const regionFilters = document.getElementById('region-filter')


regionFilters.addEventListener('change', (event)=>{
    const selected = event.target.value
    fetchALLData().then(countries => {
        const container = document.getElementById('countries-container')
        container.innerHTML = ''
        countries.filter(country => !selected || country.region === selected)
        .forEach(country=>{
            const card = createCards(country)
            container.appendChild(card)
        })
    })
})
