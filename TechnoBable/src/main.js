// main.js
import { randomElement } from './utils.js';

let words1 = [];
let words2 = [];
let words3 = [];

const init = () => {
    document.querySelector("#myButton").onclick = () => generateTechno(1);
    document.querySelector("#generateFiveButton").onclick = () => generateTechno(5);
    loadBabble();
};

const generateTechno = (num) => {
    document.querySelector("#output").innerHTML = ``;
    for (let i = 0; i < num; i++) {
        document.querySelector("#output").innerHTML += `${randomElement(words1)} ${randomElement(words2)} ${randomElement(words3)}<br>`;
    }
};

const loadBabble = () => {
    const xhr = new XMLHttpRequest();
    xhr.onload = (event) => babbleLoaded(event);
    xhr.open("GET", "data/babble-data.json", true);
    xhr.send();
};

const babbleLoaded = (event) => {
    const xhr = event.target; 
    const data = JSON.parse(xhr.responseText);
    words1 = data.words1;
    words2 = data.words2;
    words3 = data.words3;
    generateTechno(1); 
};

window.onload = init;