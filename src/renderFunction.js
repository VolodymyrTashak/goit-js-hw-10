import { getRefs } from './getRefs';
const refs = getRefs();

export function clearList() {
  return (refs.list.innerHTML = '');
}

export function clearInfo() {
  return (refs.info.innerHTML = '');
}

export function renderList(data) {
  return data
    .map(item => {
      refs.list.insertAdjacentHTML(
        'beforeend',
        `<li class="country-list-item">
      <img src="${item.flags.svg}" alt="Flags" width = 40 />
      <p class="country-list-text">${item.name.official}</p>
    </li>`
      );
    })
    .join('');
}

export function renderInfo(data) {
  return data
    .map(country => {
      refs.info.insertAdjacentHTML(
        'beforeend',
        `
    <div class="box">
  <img src="${country.flags.svg}" alt="Flags" width = 80>
  <p class="country-title">${country.name.common}</p>
</div>
<p class="country-description">Capital: <span class="country-description-name">${
          country.capital
        }</span></p>
<p class="country-description">Population: <span class="country-description-name">${
          country.population
        }</span></p>
<p class="country-description">Languages: <span class="country-description-name">${Object.values(
          country.languages
        )}</span></p>
      `
      );
    })
    .join('');
}
