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
    img.classList.add('knife');
    p.textContent = character.bio;
    cardDiv.append(h2, radioBtn, img, p);
    label.append(cardDiv);
    cardDiv.classList.add('card');

    return label;
}

export function renderChar(character) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    h2.classList.add('name');

    img.src = `${character.image}`;
    h2.textContent = character.name;
    
    div.append(img, h2);
    return div;
}

export function renderStory(story) {
    // get dom elements
    const storySec = document.querySelector('.story');
    const div_1 = document.getElementById('div-1');
    const div_2 = document.getElementById('div-2');
    const body = document.getElementById('body');
    // clear dom elements
    storySec.textContent = '';
    div_1.textContent = '';
    div_2.textContent = '';
    div_2.classList.remove('hidden');
    // set story and option texts and matching background image
    const state = story.state_description;
    const opt_1 = story.option_1_desc;
    const opt_2 = story.option_2_desc;
    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    h2.textContent = state;
    p1.textContent = opt_1;
    p2.textContent = opt_2;
    storySec.append(h2);
    body.style.backgroundImage = `url(../assets/${story.background_img})`;    
    // set button values to next Supabase storyline IDs and add event listeners
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    button1.value = story.option1_id;
    button2.value = story.option2_id;
    button1.textContent = 'choose';
    button2.textContent = 'choose';
    div_1.append(p1, button1);
    div_2.append(p2, button2);
    // if button2 value is null, hide it because there is only one choice at this point
    if (button2.value === 'null' || '') {
        div_2.classList.add('hidden');
    }

    button1.addEventListener('click', async () => {
        const stuff = await getStory(button1.value);
        // Supabase IDs 30 and 32 are our win/loss pages; they use a different render function
        if (button1.value === '30') {
            renderWin();
        }
        else if (button1.value === '32') {
            button1.disabled = true;
            renderDead();
        }
        renderStory(stuff);
    });
    
    button2.addEventListener('click', async () => {
        const stuff = await getStory(button2.value);
        if (button2.value === '30') {
            renderWin();
        }
        else if (button2.value === '32') {
            button2.disabled = true;
            renderDead();
        }
        renderStory(stuff);
    });
    
}

function renderWin() {
    const body = document.getElementById('body');
    body.textContent = '';
    const h1 = document.createElement('h1');
    h1.classList.add('results');
    h1.textContent = 'You Win💰';
    const credits = document.createElement('button');
    credits.textContent = 'credits';
    credits.classList.add('credits');
    credits.addEventListener('click', () => {
        location.replace('../END');
    });
    body.style.backgroundImage = 'url(../assets/sunrise.jpg)';   
    body.append(h1, credits);
} 

function renderDead() {
    const body = document.getElementById('body');
    body.textContent = '';
    const h1 = document.createElement('h1');
    h1.textContent = 'You Died☠️';
    h1.classList.add('results');
    const credits = document.createElement('button');
    credits.textContent = 'credits';
    credits.classList.add('credits');
    credits.addEventListener('click', () => {
        location.replace('../END');
    });
    body.style.backgroundImage = 'url(../assets/lose.jpg)';   
    body.append(h1, credits);
} 