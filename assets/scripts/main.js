import {getData} from './getData.js'

const url = `./assets/data/data.json`;
let data;

async function query(data) {
    data = await getData(url);
    return data;
}
    data = await query();
console.log(data);