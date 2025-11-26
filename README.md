# Project HTML CSS JavaScript
### REST Countries API

Programming language used:

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap
- JavaScript 
- REST API
- Mobile responsive friendly

The project is a representation of the World's Countries' flags, demographic information, population, and more.
For this API, we will use this URL: https://restcountries.com/v3.1/all, to get the data.

Deployment link for this project: [HTML_CSS_JavaScript_Project](https://eduart80.github.io/HTML_CSS_JavaScript_Project/)

## Project Overview

A user is able to:

- See all countries from the API on the homepage
- Search for a country using the `Search` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Toggle the color scheme between light and dark mode

### Path

In the index.html file, we will create a div, and that will be the anchor tag for all new cards.
```html
  <div class="container">
    <div class="row" id="countries-container"></div>
  </div>
```

From the script.js file, we make a GET call to retrieve all the available information.
This function applies async/await promise and also try/catch for error handling.
```js
export async function fetchALLData() {
 try{ await data..
 }catch()
    return data;
}
```
After we call the function fetchAllData, it will go over each object and get the information required.<br>
The next step will be to create a new card and all the fields.<br> 
After, it will load on the UI all the available countries in a new card.

## Things to consider
Call function must have a try/catch for network and api data failure.<br>
All api calls should have async/await for the promise to complete.<br>
CSS theme, light/dark, had to include all separate parts of the search, options, card, and body.
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
In order for the Theme to be consistent on all pages, I had to save the data in localStorage.

Another part is convincing Bootstrap to change a CSS color, position, or alignment. <br>
The hard part is to find the right CSS command and override Bootstrap.<br>

## Thank you for visiting. 
I hope you found this resource both enjoyable and informative, and perhaps learned something new!