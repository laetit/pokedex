import { HOST } from '../utils/endpoints';

export const fetchGeneration = (generation) => {
    return fetch(HOST + `pokedex/${generation}/`, {
        method: 'GET'
    }).then(response => response.json())
}

export const fetchPokemonProfile = (pokemon) => {
    return fetch(HOST + `pokemon/${pokemon}/`, {
        method: 'GET'
    }).then(response => response.json())
}
