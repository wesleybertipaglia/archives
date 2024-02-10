import { useQuery } from '@tanstack/react-query'
import fetchBreeds from './feetchBreeds'

export default function useBreeds(animal) {
    const results = useQuery({
        queryKey: ['breeds', animal],
        queryFn: fetchBreeds,
    })

    return [results?.data?.breeds ?? [], results.status]
}