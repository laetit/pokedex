import { HOST } from '../utils/endpoints';

export const fetchGenerations = () => {
    return fetch(HOST + 'pokedex/', {
        method: 'GET'
    }).then(response => response.json())
}