import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Carrousel from './Carrousel'

const Pet = ({ id, name, description, animal, breed, images, state, city }) => {
    let animalType = animal.charAt(0).toUpperCase() + animal.slice(1)

    return (
        <div className="flex flex-col md:flex-row gap-6 ">
            <Carrousel images={images} name={name} animal={animal} />

            <div className="flex flex-col gap-2 w-full">
                <div>
                    <h2 className="text-2xl">{name}</h2>
                    <p>
                        {animalType} - {breed}
                    </p>
                </div>
                <div>
                    <p className="inline-flex gap-2 items-center">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>
                            {city}, {state}
                        </span>
                    </p>
                </div>
                <div>
                    <p>{description}</p>
                </div>

                <div className="flex gap-3">
                    <button className="py-2 px-4 rounded bg-lime-300 hover:bg-lime-200 border border-lime-200">
                        Adopt {name}
                    </button>

                    <button className="py-2 px-4 rounded bg-neutral-100 border">
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pet
