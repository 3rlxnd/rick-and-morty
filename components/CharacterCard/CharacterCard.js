export default function CharacterCard(character) {
    let card = `<div class="card__image-container">
    <h2 class="card__title">${character.name}</h2>
            <img
                class="card__image"
                src="${character.image}"
                alt="${character.name}"
            />
        </div>
        <div class="card__content">
            <dl class="card__info">
                <dt class="card__info-title">Status</dt>
                <dd class="card__info-description">${character.status}</dd>
                <dt class="card__info-title">Species</dt>
                <dd class="card__info-description">${character.species}</dd>
                <dt class="card__info-title">Occurrences</dt>
                <dd class="card__info-description">${character.episode.length}</dd>
            </dl>
        </div>`

    const item = document.createElement('li')
    item.classList.add('card')
    item.innerHTML = card

    return item
}


{/* <dt class="card__info-title">Type</dt>
<dd class="card__info-description">${character.type}</dd> */}