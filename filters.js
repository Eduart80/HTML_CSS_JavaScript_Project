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
document.getElementById('theme-toggle').addEventListener('click', function() {
  const moonImg = document.getElementById('moon')
    if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode')
    document.body.classList.add('light-mode')
    moonImg.src = './images/moonDark.png'
    moonImg.alt = 'moonLight'
  } else {
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
     moonImg.src = './images/moonLight.png'
    moonImg.alt = 'moonDark'
  }
});