import Pokemon from './pokemonModel.js'
const PokemonApi = {}

function getPokemonDetail(pokemon) {
    return fetch(pokemon.url).then((response) => response.json().then(convertPokemonToObject))
}

function convertPokemonToObject(pokemonDetails) {
    debugger
    const pokemon = new Pokemon()
    pokemon.number = pokemonDetails.order
    pokemon.name = pokemonDetails.name
    pokemon.photo = pokemonDetails.sprites.other.dream_world.front_default
    const types = pokemonDetails.types.map((slot) => slot.type.name)
    const [type] = types
    pokemon.type = type
    pokemon.types = types

    return pokemon
}

PokemonApi.getPokemons = (offset=0, limit=10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((response) => response.json())
    .then((body) => body.results)
    .then((pokemons) => pokemons.map(getPokemonDetail))
    .then((requestDetails) => Promise.all(requestDetails))
    .catch((error) => console.log(error))
}

PokemonApi.getPokemon = (pokemonName) => {
    debugger
    pokemonName = pokemonName.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => convertPokemonToObject(pokemon))
    .catch((error) => console.log(error))
}
export default PokemonApi