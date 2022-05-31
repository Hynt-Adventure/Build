


export function renderCard(character) {
    
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const cardDiv = document.createElement('div');
    h2.textContent = character.name;
    img.src = character.image;
    p.textContent = character.bio;
    cardDiv.append(h2, img, p);
    cardDiv.classList.add('card');

    return cardDiv;
    //wait until we have more information

}
