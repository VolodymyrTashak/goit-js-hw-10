import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { getRefs } from './getRefs';
import { clearList, clearInfo, renderList, renderInfo } from './renderFunction';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();
refs.input.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));
function onInputSearch(e) {
  clearInfo();
  clearList();
  const inputValue = e.target.value.trim();
  if (!inputValue) {
    clearInfo();
    clearList();
    return;
  }
  fetchCountries(inputValue).then(onFeachSuccess).catch(onFeachError);
}

function onFeachSuccess(data) {
  if (data.length >= 2 && data.length <= 10) {
    renderList(data);
    clearInfo();
  }
  if (data.length < 2) {
    renderInfo(data);
    clearList();
  }
  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
  console.log(data);
}

function onFeachError() {
  Notify.failure('Oops, there is no country with that name');
}
