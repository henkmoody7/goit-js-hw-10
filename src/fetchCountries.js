export function fetchCountries(name) {
  const url = 'https://restcountries.com/v3.1//name/';
  return fetch(
    `${url}${name}?fields=name,capital,population,flags,languages`
  ).then(resolve => {
    if (!resolve.ok) {
      throw new Error(resolve.status);
    }
    return resolve.json();
  });
}
