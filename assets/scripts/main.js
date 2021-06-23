// importing modules for query processing and fetching data
import {getData} from './getData.js';
import {FilterByLength} from './lengthFilter.js';
import {FilterBySubstring} from './substringFilter.js';

// variables for DOM elements and url with data
let lengthFilterButton = document.getElementById('lengthFilter');
let substringFilterButton = document.getElementById('substringFilter');
let queryInput = document.querySelector('.main__form__input');
let queryResult = document.querySelector('.main__form__result');
const url = './assets/data/data.json';
let dataArr;

// creating Event Listeners for buttons
lengthFilterButton.addEventListener('click', (event) => { 
    event.preventDefault();
    let queryText = queryInput.value;
    queryResult.value = FilterByLength(dataArr, queryText);
});
substringFilterButton.addEventListener('click', (event) => { 
    event.preventDefault();
    FilterBySubstring();
});


async function query(data) {
    data = await getData(url);
    return data;
}
    dataArr = await query();



