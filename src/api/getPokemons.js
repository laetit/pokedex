import { HOST } from '../utils/endpoints';

export const fetchPokedex = (pokedex) => {
    return fetch(HOST + `pokedex/${pokedex}/`, {
        method: 'GET'
    }).then(response => response.json())
}

export const fetchPokemonProfile = (pokemon) => {
    return fetch(HOST + `pokemon/${pokemon}/`, {
        method: 'GET'
    }).then(response => response.json())
}

export const fetchPokemonSpecie = (pokemon) => {
    return fetch(HOST + `pokemon-species/${pokemon}/`, {
        method: 'GET',
    }).then(response => response.json())
}