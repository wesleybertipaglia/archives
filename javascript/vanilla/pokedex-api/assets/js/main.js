import PokemonApi from './pokemonApi.js'
import PokemonTemplate from './pokemonTemplate.js'

const loadMoreButton = document.querySelector('#loadMoreButton')
loadMoreButton.addEventListener('click', loadMorePokemons)

const pokemonListElement = document.querySelector('#pokemonList')
function appendPokemons(offset=0, limit=5) {
    PokemonApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemons.forEach(pokemon => {
            pokemonListElement.appendChild(PokemonTemplate.getElement(pokemon))
        })
    })    
}
appendPokemons()

const maxRecords = 80
const limit = 5
let offset = 0
    
function loadMorePokemons() {
    offset += limit
    const qtdRecordsNextPage = offset + limit

    if (qtdRecordsNextPage >= maxRecords) 
    {
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else 
    {
        appendPokemons(offset, limit) 
    }
}