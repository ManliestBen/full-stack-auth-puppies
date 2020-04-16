import tokenService from '../services/tokenService';
const BASE_URL = '/api/users';

export function getAll() {
    const options = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    };
    return fetch(BASE_URL, options, {mode: "cors"})
    .then(res => res.json());
}

export function show(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'GET',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
}