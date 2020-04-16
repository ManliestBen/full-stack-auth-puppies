import tokenService from '../services/tokenService';
const BASE_URL = '/api/cats';

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

export function create(cat) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(cat)
  }, {mode: "cors"}).then(res => res.json());
}

export function deleteOne(idx) {
  return fetch(`${BASE_URL}/${idx}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }, {mode: "cors"}).then(res => res.json());
}

export function update(cat) {
  return fetch(`${BASE_URL}/${cat._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(cat)
  }, {mode: "cors"}).then(res => res.json());
}