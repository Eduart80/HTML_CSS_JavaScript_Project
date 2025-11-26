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


document.querySelector('.search-input').addEventListener('input',function(e){
  const searchEvent = e.target.value.toLowerCase().replace(/[^a-zA-Z]/g, "")
  if(searchEvent){
    fetchALLData().then(country1=>{
        const container = document.getElementById('countries-container')
        container.innerHTML=''
        country1.filter(count=> count.name.common.toLowerCase().includes(searchEvent))
        .forEach(country2 => {
          const card = createCards(country2)
          container.appendChild(card)
        })
      })
  }else{
    alert('Only letters on search field.')
    e.target.value=''
  }
  
})