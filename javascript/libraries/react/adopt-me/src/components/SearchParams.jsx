import React, { useState, useEffect } from 'react'
import Pet from './Pet'
import useBreeds from '../hooks/useBreeds'

const SearchParams = () => {
    const [location, setLocation] = useState('')
    const [animal, setAnimal] = useState('')
    const [breed, setBreed] = useState('')
    const [pets, setPets] = useState([])
    const [animals, setAnimals] = useState([])
    const [breeds] = useBreeds(animal)

    useEffect(() => {
        requestPets()
        requestAnimals()
    }, [])

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        )
        const json = await res.json()
        setPets(json.pets)
    }

    async function requestAnimals() {
        const res = await fetch(`http://pets-v2.dev-apis.com/animals`)
        const json = await res.json()
        setAnimals(json.animals)
    }

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    requestPets()
                }}
            >
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                        onBlur={(e) => setAnimal(e.target.value)}
                    >
                        <option />
                        {animals.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        onBlur={(e) => setBreed(e.target.value)}
                        disabled={!breeds.length}
                    >
                        <option />
                        {breeds.map((breed) => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>

            {pets.map((pet) => {
                return (
                    <Pet
                        key={pet.name}
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                    />
                )
            })}
        </div>
    )
}

export default SearchParams
