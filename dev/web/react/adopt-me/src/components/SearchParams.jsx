import { useState, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import fetchSearch from '../hooks/fetchSearch'
import useBreeds from '../hooks/useBreeds'
import useAnimals from '../hooks/useAnimals'
import ListPets from './ListPets'
import AdoptedContext from '../contexts/AdoptedContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchParams = () => {
    const [adoptedPet] = useContext(AdoptedContext)
    const [search, setSearch] = useState({
        location: '',
        animal: '',
        breed: '',
    })
    const [animal, setAnimal] = useState('')
    const [breeds] = useBreeds(animal)
    const [animals] = useAnimals()

    const results = useQuery({
        queryKey: ['search', search],
        queryFn: fetchSearch,
    })

    const pets = results?.data?.pets ?? []

    return (
        <div className="container max-w-5xl mx-auto p-6">
            {adoptedPet ? (
                <div className="py-1 px-2 w-fit mb-3 rounded-md bg-lime-200">
                    <h2>Thanks for adopting {adoptedPet.name}</h2>
                </div>
            ) : null}
            <form
                className="flex gap-4 mb-6 text-base"
                onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.target)
                    const obj = {
                        location: formData.get('location') || '',
                        animal: formData.get('animal') || '',
                        breed: formData.get('breed') || '',
                    }
                    setSearch(obj)
                }}
            >
                <label htmlFor="location" className="w-full self-end">
                    Location
                    <input
                        id="location"
                        name="location"
                        placeholder="Location"
                        className="border p-1 rounded-sm w-full"
                    />
                </label>

                <label htmlFor="animal" className="w-full self-end">
                    Animal
                    <select
                        id="animal"
                        name="animal"
                        value={animal}
                        className="border p-1 rounded-sm w-full"
                        onChange={(e) => {
                            setAnimal(e.target.value)
                        }}
                    >
                        <option hidden selected value={''}>
                            Animal
                        </option>
                        <option />
                        {animals.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="breed" className="w-full self-end">
                    Breed
                    <select
                        id="breed"
                        name="breed"
                        disabled={!breeds.length}
                        className="border p-1 rounded-sm w-full"
                    >
                        <option hidden selected value={''}>
                            Breed
                        </option>
                        <option />
                        {breeds.map((breed) => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </label>
                <button className="h-fit self-end py-1 px-2 border rounded">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>

            <ListPets pets={pets} />
        </div>
    )
}

export default SearchParams
