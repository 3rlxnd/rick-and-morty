export default function SearchBar() {
    let form = document.createElement('form')
    form.setAttribute('data-js', 'search-bar')
    form.classList.add('search-bar')
    form.innerHTML = `<input
    name="query"
    class="search-bar__input"
    type="text"
    placeholder="Search Characters..."
    aria-label="character name"
    data-js="search-bar-input"
  />
  <button class="search-bar__button" aria-label="search for character">
    <img
      class="search-bar__icon"
      src="assets/magnifying-glass.png"
      alt=""
    />
  </button>`
  return form
}

