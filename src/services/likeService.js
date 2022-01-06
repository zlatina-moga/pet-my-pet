import * as request from './requester';

const baseUrl = `http://localhost:3030`;

export const like = (userId, petId) => request.post(`${baseUrl}/data/likes`, {userId,petId});