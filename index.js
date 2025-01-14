import CharacterCard from './components/CharacterCard/CharacterCard.js';
import NavButton from './components/NavButton/NavButton.js';
import NavPagination from './components/NavPagination/NavPagination.js';
import SearchBar from './components/SearchBar/SearchBar.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

let searchBar = SearchBar()
let nextButton = NavButton('next')
let prevButton = NavButton('prev')
let pagination = NavPagination();

searchBarContainer.append(searchBar)
fetchCharacters(page)

searchBar.addEventListener('submit', (event) => {
  page = 1
  event.preventDefault()
  let formData = new FormData(event.target)
  let data = Object.fromEntries(formData)
  searchQuery = data.query
  fetchCharacters(page)
  searchBar.reset()
})

nextButton.addEventListener('click', () => {
  if (page < maxPage) {
    page++
    document.documentElement.scrollTop = 0
    fetchCharacters(page)
  }
})

prevButton.addEventListener('click', () => {
  if (page > 1) {
    page--
    document.documentElement.scrollTop = 0
    fetchCharacters(page)
  }
})

async function fetchCharacters(page) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`)
    const data = await response.json()
    const characters = data.results;

    maxPage = data.info.pages

    pagination.textContent = page + '/' + maxPage
    cardContainer.innerHTML = ''

    if (characters.length > 0) {
      navigation.append(prevButton, pagination, nextButton)
      renderCards(characters)
      // return characters
    }

  } catch (error) {
    prevButton.remove()
    pagination.remove()
    nextButton.remove()
    cardContainer.innerHTML = ''
    let text = document.createElement('p')
    text.classList.add('no-result')
    text.textContent = 'No Results found!'
    cardContainer.append(text)
    pagination.textContent = 1 + '/' + 1

  }
}

function renderCards(characters) {
  characters.forEach(character => {
    const card = CharacterCard(character)
    cardContainer.append(card)

    card.addEventListener('click', () => {
      window.open(character.image, "_blank")
    })
  });
}
