// importing modules for query processing and fetching data
import {getData} from './getData.js';
import {FilterByLength} from './lengthFilter.js';
import {FilterBySubstring} from './substringFilter.js';

// variables for DOM elements and url with data
let lengthFilterButton = document.getElementById('lengthFilter');
let substringFilterButton = document.getElementById('substringFilter');
let queryInput = document.querySelector('.main__form__input');
let queryResult = document.querySelector('.main__form__result');
let switcher = document.querySelector('.header__wrapper__switcher');
const url = './assets/data/data.json';
let dataArr;
let lowerCaseMode = false;

//creating Event Listener for switcher to move the redd circle
switcher.addEventListener('click', () => {
    switcher.classList.toggle('switcher_on');
    if (lowerCaseMode) {
        lowerCaseMode = false;
    } else {
        lowerCaseMode = true;
    }
})

// creating Event Listeners for buttons
lengthFilterButton.addEventListener('click', (event) => { 
    event.preventDefault();
    let queryText = queryInput.value;
    queryResult.value = FilterByLength(dataArr, queryText);
});
substringFilterButton.addEventListener('click', (event) => { 
    event.preventDefault();
    let queryText = queryInput.value;
    if (lowerCaseMode) {
        queryText = queryText.toLowerCase();
    }
    queryResult.value = FilterBySubstring(dataArr, queryText);
});


async function query(data) {
    data = await getData(url);
    return data;
}
    dataArr = await query();



