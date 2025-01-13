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
navigation.append(prevButton, pagination, nextButton)
fetchCharacters(page)

searchBar.addEventListener('submit', (event) => {
  event.preventDefault()
  let formData = new FormData(event.target)
  let data = Object.fromEntries(formData)
  searchQuery = data.query
  fetchCharacters(page)
  formData.reset()
})

nextButton.addEventListener('click', () => {
  page < maxPage ? page++ : null
  fetchCharacters(page)
})

prevButton.addEventListener('click', () => {
  page > 1 ? page-- : null
  fetchCharacters(page)
})

async function fetchCharacters(page) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`)
    const data = await response.json()
    const characters = data.results;
    maxPage = data.info.pages

    pagination.textContent = page + '/' + maxPage
    cardContainer.innerHTML = ''
    renderCards(characters)
    return characters
  } catch (error) {
    console.log(error);
  }
}

function renderCards(characters) {
  characters.map((character) => {
    console.log(character);
    
    const card = CharacterCard(character)
    cardContainer.append(card)
    card.addEventListener('click', () => {
      console.log(character)
    })
  });
}
