import { useState, useEffect } from "react";

const localCache = {};

export default function useBreeds(animal) {
    const [breeds, setBreeds] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!animal) {
            setBreeds([]);
        } else if (localCache[animal]) {
            setBreeds(localCache[animal]);
        } else {
            requestBreeds();
        }
    }, [animal]);

    async function requestBreeds() {
        setBreeds([])
        setStatus("loading");

        const res = await fetch(
            `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
        );

        const json = await res.json();
        localCache[animal] = json.breeds || [];
        setBreeds(localCache[animal]);
        setStatus("loaded");
    }

    return [breeds, status];
}