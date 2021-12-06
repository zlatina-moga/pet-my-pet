const baseUrl = `http://localhost:3030`

export const getAll = async ()  => {
    let response = await fetch(`${baseUrl}/data/pets`)
    let pets = await response.json();
    let result = Object.values(pets)
    return result;
}

export const create = async(petData, token) => {
    let response = await fetch(`${baseUrl}/data/pets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...petData, likes: 0})
    });

    let result = response.json();
    return result;
}

export const getOne = async (petId) => {
    let respone = await fetch(`${baseUrl}/data/pets/${petId}`)
    let result = await respone.json();
    return result;
}