import { getChar, getStory } from '../fetch-utils.js';
import { renderChar, renderStory } from '../render-utils.js';


const charSection = document.getElementById('char-section');

async function displayChar() {
    const params = new URLSearchParams(window.location.search);
    const stuff = await getChar(params.get('id'));
    const div = renderChar(stuff);
    charSection.append(div);
}


window.addEventListener('load', async () => {
    displayChar();
    const init = await getStory(1);
    renderStory(init);
});

