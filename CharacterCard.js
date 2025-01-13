export default function CharacterCard(character) {
    let card = `<div class="card__image-container">
            <img
                class="card__image"
                src="${character.image}"
                alt="${character.name}"
            />
            <div class="card__image-gradient"></div>
        </div>
        <div class="card__content">
            <h2 class="card__title">${character.name}</h2>
            <dl class="card__info">
                <dt class="card__info-title">Status</dt>
                <dd class="card__info-description">${character.status}</dd>
                <dt class="card__info-title">${character.type}</dt>
                <dd class="card__info-description"></dd>
                <dt class="card__info-title">Occurrences</dt>
                <dd class="card__info-description">51</dd>
            </dl>
        </div>`

    const item = document.createElement('li')
    item.classList.add('card')
    item.innerHTML = card

    return item
}