import React from 'react';
import { HOST } from './endpoint';

export const requestPokeApi = () => {
    fetch(HOST + 'pokedex/1', {
        method: 'GET'
    }).then(response => {
        console.log(response.json())
    })
}