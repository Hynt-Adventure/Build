import { getChar } from '../fetch-utils.js';
import { renderChar } from '../render-utils.js';

const choice1 = document.getElementById('choice-1');
const choice2 = document.getElementById('choice-2');
const charSection = document.getElementById('char-section');

choice1.addEventListener('click', () => {
    location.replace('../END');
});

choice2.addEventListener('click', () => {
    location.replace('../END');
});

async function displayChar() {
    const params = new URLSearchParams(window.location.search);
    const stuff = await getChar(params.get('id'));
    console.log(stuff);
    const div = renderChar(stuff);
    charSection.append(div);
}

displayChar();