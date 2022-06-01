import { getStory } from './fetch-utils.js';



export function renderCard(character) {
    
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const cardDiv = document.createElement('div');
    const radioBtn = document.createElement('input');
    const label = document.createElement('label');
    radioBtn.type = 'radio';
    radioBtn.name = 'character';
    radioBtn.value = character.id;
    h2.textContent = character.name;
    img.src = character.image;
    p.textContent = character.bio;
    cardDiv.append(h2, img, p, radioBtn);
    label.append(cardDiv);
    cardDiv.classList.add('card');

    return label;
    //wait until we have more information

}

export function renderChar(character) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');

    img.src = `${character.image}`;
    h2.textContent = character.name;
    
    div.append(img, h2);
    return div;
}

export function renderStory(story) {
    const storySec = document.querySelector('.story');
    const div_1 = document.getElementById('div-1');
    const div_2 = document.getElementById('div-2');
    storySec.textContent = '';
    div_1.textContent = '';
    div_2.textContent = '';
    const state = story.state_description;
    const opt_1 = story.option_1_desc;
    const opt_2 = story.option_2_desc;
    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    button1.value = story.option1_id;
    button2.value = story.option2_id;
    button1.textContent = 'Choose';
    button2.textContent = 'Choose';
    button1.addEventListener('click', async () => {
        const stuff = await getStory(button1.value);
        renderStory(stuff);
    });
    button2.addEventListener('click', async () => {
        const stuff = await getStory(button2.value);
        renderStory(stuff);
    });

    h2.textContent = state;
    p1.textContent = opt_1;
    p2.textContent = opt_2;
    storySec.append(h2);
    div_1.append(p1, button1);
    div_2.append(p2, button2);

}

