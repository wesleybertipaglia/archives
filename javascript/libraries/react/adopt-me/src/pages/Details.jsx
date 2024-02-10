import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import ErrorBoundary from '../components/ErrorBoundary'
import fetchPet from '../hooks/fetchPet'
import Pet from '../components/Pet'

const Details = () => {
    const { id } = useParams()
    const results = useQuery({
        queryKey: ['details', id],
        queryFn: fetchPet,
    })    

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader animate-spin text-5xl text-center p-6 mt-40">
                    🌀
                </h2>
            </div>
        )
    }

    const pet = results.data.pets[0]

    return (
        <div className="details">
            <div className="container max-w-5xl mx-auto p-6">
                <Pet {...pet} />
            </div>
        </div>
    )
}

function DetailsErrorBoundary() {
    return (
        <ErrorBoundary>
            <Details />
        </ErrorBoundary>
    )
}

export default DetailsErrorBoundary
