const baseUrl = `http://localhost:3030`

export const getAll = async ()  => {
    let response = await fetch(`${baseUrl}/data/pets`)
    let pets = await response.json();
    let result = Object.values(pets)
    return result;
}