import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Carrousel from './Carrousel'
import Modal from './Modal'
import AdoptedContext from '../contexts/AdoptedContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Pet = ({ id, name, description, animal, breed, images, state, city }) => {
    const [showModalAdopt, setShowModalAdopt] = useState(false)
    const [showModalShare, setShowModalShare] = useState(false)
    const [adopted, setAdoptedPet] = useContext(AdoptedContext)
    let animalType = animal.charAt(0).toUpperCase() + animal.slice(1)
    const navigate = useNavigate()
    const pet = {
        id: id,
        name: name,
        description: description,
        animal: animal,
        breed: breed,
        images: images,
        state: state,
        city: city,
        location: city + ', ' + state,
    }

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
                    <button
                        onClick={() => setShowModalAdopt(true)}
                        className="py-2 px-4 rounded bg-lime-300 hover:bg-lime-200 border border-lime-200"
                    >
                        Adopt {name}
                    </button>

                    <button
                        onClick={() => setShowModalShare(true)}
                        className="py-2 px-4 rounded bg-neutral-100 border"
                    >
                        Share
                    </button>
                </div>

                {showModalAdopt ? (
                    <Modal>
                        <div className="flex flex-col gap-6">
                            <h2>Would you like to adopt {name}?</h2>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => {
                                        setAdoptedPet(pet)
                                        setShowModalAdopt(false)
                                        navigate('/')
                                    }}
                                    className="w-full py-2 px-4 rounded bg-lime-300 hover:bg-lime-200 border border-lime-200"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() => setShowModalAdopt(false)}
                                    className="w-full py-2 px-4 rounded bg-neutral-100 border"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </Modal>
                ) : null}

                {showModalShare ? (
                    <Modal>
                        <div className="flex flex-col gap-6">
                            <h2>Share {name} with your friends!</h2>
                            <div className="flex flex-col gap-3">
                                <Link
                                    to={
                                        'https://twitter.com/intent/tweet?text=' +
                                        name +
                                        ' needs a home! Adopt it at: ' +
                                        window.location.href +
                                        ' %23AdoptAPet'
                                    }
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="w-full py-1 px-2 rounded border"
                                >
                                    Twitter
                                </Link>

                                <Link
                                    to={
                                        'https://api.whatsapp.com/send?text=' +
                                        name +
                                        ' needs a home! Adopt it at: ' +
                                        window.location.href +
                                        ' %23AdoptAPet'
                                    }
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="w-full py-1 px-2 rounded border"
                                >
                                    WhatsApp
                                </Link>

                                <Link
                                    to={
                                        'mailto:?subject=Adopt ' +
                                        name +
                                        '&body=' +
                                        name +
                                        ' needs a home! ' +
                                        window.location.href
                                    }
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="w-full py-1 px-2 rounded border"
                                >
                                    Email
                                </Link>
                            </div>
                        </div>
                    </Modal>
                ) : null}
            </div>
        </div>
    )
}

export default Pet
