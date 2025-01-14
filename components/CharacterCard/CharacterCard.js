export default function CharacterCard(character) {
    let card = `
    <img
    class="card__image"
    src="${character.image}"
    alt="${character.name}"
    />
    <h2 class="card__title">${character.name}</h2>
            <dl class="card__info">
                <dt class="card__info-title">Status</dt>
                <dd class="card__info-description">${character.status}</dd>
                <dt class="card__info-title">Species</dt>
                <dd class="card__info-description">${character.species}</dd>
                <dt class="card__info-title">Occurrences</dt>
                <dd class="card__info-description">${character.episode.length}</dd>
            </dl>`

    const item = document.createElement('li')
    item.classList.add('card')
    item.innerHTML = card

    return item
}