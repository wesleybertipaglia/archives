const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch pet');
    }

    return res.json();
};

export default fetchPet;