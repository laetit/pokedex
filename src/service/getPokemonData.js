import { HOST } from './endpoint';

export const requestPokeApi = () => {
    fetch(HOST + 'pokemon/', {
        method: 'GET'
    }).then(response => {
        console.log(response.json())
    })
}