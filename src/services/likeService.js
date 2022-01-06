import * as request from './requester';

const baseUrl = `http://localhost:3030/data/likes`;

export const like = (userId, petId) => request.post(`${baseUrl}`, {userId,petId});

export const getCount = (petId) => {
    const query = encodeURIComponent(`petId="${petId}"`);
    return request.get(`${baseUrl}?select=_id&where=${query}`)
        .then(res => res.length);
}