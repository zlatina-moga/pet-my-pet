const baseUrl = `http://localhost:3030`

export const getAll = async ()  => {
    let response = await fetch(`${baseUrl}/data/pets`)
    let pets = await response.json();
    let result = Object.values(pets)
    return result;
}

export const create = async(petData) => {
    let response = await fetch(`${baseUrl}/data/pets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(petData)
    });

    let result = response.json();
    return result;
}