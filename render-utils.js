export function renderCard(character) {
    const h2 = document.createElement('h2');
    const img = document.createElement('img');

    h2.textContent = character.name;
    img.src = character.image;
    //wait until we have more information
}