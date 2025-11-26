
const params = new URLSearchParams(window.location.search);
const countryName = params.get('country');
const detailsDiv = document.getElementById('country-details');

if (!countryName) {
  detailsDiv.innerHTML = '<p>No country specified.</p>';
} else {
  let url = 'https://restcountries.com/v3.1/name/' + encodeURIComponent(countryName) + '?fullText=true';
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let country = data[0];
      let borders = country.borders || [];
      let nativeName = country.name.common;
      
      let population = country.population ? country.population.toLocaleString() : 'N/A';
      let region = country.region || 'N/A';
      let subregion = country.subregion || 'N/A';
      let capital = (country.capital && country.capital[0]) ? country.capital[0] : 'N/A';
      let tld = (country.tld && country.tld.length > 0) ? country.tld.join(', ') : 'N/A';
      let currencies = 'N/A';
      
      let languages = 'N/A';
      if (country.languages) {
        let langArr = Object.values(country.languages);
        if (langArr.length > 0) {
          languages = langArr.join(', ');
        }
      }
      let bordersHtml = 'None';
      if (borders.length > 0) {
        bordersHtml = '';
        for (let i = 0; i < borders.length; i++) {
          bordersHtml += '<span class="btn btn-secondary btn-sm m-1 border_country">' + borders[i] + '</span>';
        }
      }
      detailsDiv.innerHTML =
        '<div class="country-detail-block col-md-6">' +
          '<img src="' + country.flags.png + '" alt="' + country.name.common + '" class="img-fluid rounded-3 shadow">' +
        '</div>' +
        '<div class="country-detail-block col-md-6" style="padding-left:25px">' +
          '<h2>' + country.name.common + '</h2>' +
          '<p><strong>Native Name:</strong> ' + nativeName + '</p>' +
          '<p><strong>Population:</strong> ' + population + '</p>' +
          '<p><strong>Region:</strong> ' + region + '</p>' +
          '<p><strong>Sub Region:</strong> ' + subregion + '</p>' +
          '<p><strong>Capital:</strong> ' + capital + '</p>' +
          '<p><strong>Top Level Domain:</strong> ' + tld + '</p>' +
          '<p><strong>Currencies:</strong> ' + currencies + '</p>' +
          '<p><strong>Languages:</strong> ' + languages + '</p>' +
          '<p><strong>Border Countries:</strong> ' + bordersHtml + '</p>' +
        '</div>';
    })
    .catch(function(error) {
      detailsDiv.innerHTML = '<p>Error loading country details.</p>';
    });
}
