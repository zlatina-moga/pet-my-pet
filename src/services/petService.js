import *  as request from "./requester";

const baseUrl = `http://localhost:3030`;

export const getAll = () => request.get(`${baseUrl}/data/pets`);

export const getMyPets = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`)
    return request.get(`${baseUrl}/data/pets?where=${query}`)
}

export const create = async(petData, token) => {
    let response = await fetch(`${baseUrl}/data/pets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...petData, likes: []})
    });

    let result = response.json();
    return result;
}

export const getOne = async (petId) => {
    let respone = await fetch(`${baseUrl}/data/pets/${petId}`)
    let result = await respone.json();
    return result;
}

export const update = (petId, petData) => request.put(`${baseUrl}/data/pets/${petId}`, petData);

export const destroy = (petId, token) => {
    return fetch(`${baseUrl}/data/pets/${petId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then (res => res.json())
}

export const like = (petId, pet, token) => {
    return fetch(`${baseUrl}/data/pets/${petId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({pet})
    }).then(res => res.json())
}

