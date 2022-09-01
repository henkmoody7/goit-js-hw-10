import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { refs } from './refs';
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const inputCountry = e.target.value.trim();
  if (inputCountry === '') {
    clearCountry();
    return;
  }
  fetchCountries(inputCountry)
    .then(country => {
      console.log(country);
      return country;
    })
    .then(renderCountryList);
}

function renderCountryList(country) {
  // if (!country) {
  //   return alert('no country');
  // }
  const countries = country
    .map(country => {
      return `<li class='country-list__item'>
      <img class='country-list__flag' src="${country.flags.svg}" alt="Country flag"/>
      <p class='country-list__text'>${country.name.official}</p>
        </li>`;
    })
    .join('');

  const oneCountry = country
    .map(country => {
      return `<img class='country-info__flag' src="${
        country.flags.svg
      }" alt="Country flag"/>
    <h1 class='country-info__tittle'>${country.name.common}</h1>
    <p class ='country-info__text'>Capital: ${country.capital}</p>
    <p class ='country-info__text'>Population: ${country.population}</p>
    <p class ='country-info__text'>Languages: ${Object.values(
      country.languages
    )}</p>`;
    })
    .join('');

  if (country.length > 10) {
    alert('Too many matches found. Please enter a more specific name.');
    return;
  }
  if (country.length === 1) {
    clearCountry();
    refs.countryInfo.insertAdjacentHTML('beforeend', oneCountry);
  }
  if (country.length > 1) {
    clearCountry();
    refs.countryList.insertAdjacentHTML('beforeend', countries);
  }
}

function clearCountry() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
