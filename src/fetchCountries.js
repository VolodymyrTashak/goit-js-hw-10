const URL = 'https://restcountries.com/v3.1/name/';
const search_Params = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${URL}${name}?${search_Params}`).then(response => {
    if (!response.ok || response.status === 404) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
