/* eslint-disable import/extensions */
// importing modules for query processing and fetching data
import { getData } from './getData.js';
import { FilterByLength } from './lengthFilter.js';
import { FilterBySubstring } from './substringFilter.js';

// variables for DOM elements and url with data
const lengthFilterButton = document.getElementById('lengthFilter');
const substringFilterButton = document.getElementById('substringFilter');
const queryInput = document.querySelector('.main__form__input');
const queryResult = document.querySelector('.main__form__result');
const switcher = document.querySelector('.header__wrapper__container__checkbox');
const url = 'https://cors.bridged.cc/https://www.mrsoft.by/data.json';
let dataArr;
let lowerCaseMode = false;

//  creating Event Listener for switcher to move the redd circle

switcher.addEventListener('click', () => {
  if (!switcher.checked) {
    lowerCaseMode = true;
  } else {
    lowerCaseMode = false;
    }

});

// creating Event Listeners for buttons
lengthFilterButton.addEventListener('click', (event) => {
  event.preventDefault();
  const queryText = queryInput.value;
  queryResult.value = FilterByLength(dataArr, queryText);
});
substringFilterButton.addEventListener('click', (event) => {
  event.preventDefault();
  let queryText = queryInput.value;
  queryResult.value = FilterBySubstring(dataArr, queryText, lowerCaseMode);
});

async function query(data) {
  data = await getData(url);
  return data;
}
dataArr = await query();