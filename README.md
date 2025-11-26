# Project HTML CSS JavaScript
### REST Countries API with color theme switcher solution

Programming language used:

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap
- JavaScript 
- REST API
- Mobile respond friendly

Project is a represantation of World Countries flag, demographic information, polulation, and more.
For this API we will use this URL: https://restcountries.com/v3.1/all, to get the data.

Deployment link for this project: [HTML_CSS_JavaScript_Project](https://eduart80.github.io/HTML_CSS_JavaScript_Project/)

## Project Overview

A users is able to:

- See all countries from the API on the homepage
- Search for a country using `Search` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Toggle the color scheme between light and dark mode

### Path

On index.html file we will created a div, and that will be the ancore tag for all new cards.
```html
  <div class="container">
    <div class="row" id="countries-container"></div>
  </div>
```

From script.js file we make a GET call to retreive all the available information.
This function apply async/await promise and also try/catch for error handeling.
```js
export async function fetchALLData() {
 try{ await data..
 }catch()
    return data;
}
```
After we call the function fetchAllData, it will go over each object and get the information required.<br>
Next step will be, create a new card, and all the fields.<br> 
After, it will load on UI all the available countries in a new card.

## Things to consider
Call function must have a try/catch for network and api data failure.<br>
All api call should have Aync/await for the promise to complete.<br>
CSS theme, light/dark had to include all separate parts of the search, options, card, and body.
```css 
body.dark-mode,
body.dark-mode .search-input,
body.dark-mode .form-select,
body.dark-mode .my-card,
body.dark-mode .text-body-secondary,
body.dark-mode #mode {
 background: #222 !important;
  color: #fff !important;
  border-color: #444 !important;
}
```
In order for Theme to be consistent on all pages, i had to save the data on localStorage.

Another part is convincing Bootstrap to change a css color, position, or alignment. 
Hard part is to find the right css comand and override Bootstrap.

