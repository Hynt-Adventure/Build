import { checkAuth, getCharacters, logout } from '../fetch-utils.js';
import { renderCard } from '../render-utils.js';

const characterContainer = document.querySelector('.character-select');
checkAuth();

const logoutButton = document.getElementById('logout');
const startButton = document.getElementById('start');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayCharacters() {
    const data = await getCharacters();

    for (let character of data) {
        const newDiv = renderCard(character);
    
        newDiv.addEventListener('click', () => {
            //finish later
        });
        characterContainer.append(newDiv);
    }
}

displayCharacters();

startButton.addEventListener('click', () => {
    const selected = document.querySelector('input[type="radio"]:checked');
    window.location.replace(`../Story/index.html?id=${selected.value}`);
});