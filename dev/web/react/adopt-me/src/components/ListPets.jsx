import PetPreview from './PetPreview'

const ListPets = ({ pets }) => {
    return (
        <div className="flex flex-col gap-4">
            {pets.length === 0 ? (
                <h2>No pet found</h2>
            ) : (
                <>
                    <h2>{pets.length} pets found</h2>
                    {pets.map((pet) => {
                        return <PetPreview key={pet.id} {...pet} />
                    })}
                </>
            )}
        </div>
    )
}

export default ListPets
