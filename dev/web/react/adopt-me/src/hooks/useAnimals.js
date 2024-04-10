import { useState, useEffect } from 'react';

export default function useAnimals() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        requestAnimals();
    }, []);

    async function requestAnimals() {
        const res = await fetch(`http://pets-v2.dev-apis.com/animals`)

        const json = await res.json();
        setAnimals(json.animals || []);
    }

    return [animals]
}