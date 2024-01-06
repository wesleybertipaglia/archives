import PokemonApi from './pokemonApi.js'
import PokemonTemplate from './pokemonTemplate.js'
const pokemonElement = document.querySelector('.pokemon')
const pokemonTitle = document.querySelector('.page-title')

function appendPokemon(name) {
    let title = name.charAt(0).toUpperCase() + name.slice(1)
    pokemonTitle.innerHTML = title

    PokemonApi.getPokemon(name).then((pokemon) => {
        pokemonElement.appendChild(PokemonTemplate.getElement(pokemon, false))
    })    
}

function getPokemonName() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('name');
}

appendPokemon(getPokemonName())