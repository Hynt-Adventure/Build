


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