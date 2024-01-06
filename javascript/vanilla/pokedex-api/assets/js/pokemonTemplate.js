const PokemonTemplate = {}

function getTypes(types) {
    return types.map((type) => `<li class="type ${type}">${type}</li>`)
}

PokemonTemplate.getElement = (pokemon, isALink=true) => {
    let pokemonTemplate = document.createElement('li')
    pokemonTemplate.setAttribute('class', 'pokemon')
    pokemonTemplate.classList.add(pokemon.type)
    let pokemonContent = document.createElement('div')

    if(isALink) {
        pokemonContent = document.createElement('a')
        pokemonContent.setAttribute('href', `/pages/pokemon.html?name=${pokemon.name}`)
    }

    pokemonContent.innerHTML = `
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    
    <div class="detail">
        <ol class="types">
            ${getTypes(pokemon.types).join('')}
        </ol>

        <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>`
    
    pokemonTemplate.appendChild(pokemonContent)
    return pokemonTemplate
}

export default PokemonTemplate