import React, { useEffect, useState } from 'react';
import { ContentPokedex, HeaderPokedex, ContentSearch } from './Pokedex.style';
import { requestPokeApi } from '../../service/getPokemonData';

const Pokedex = () => {

    const [loading, setLoading] = useState();
    const [pokemons, setPokemons] = useState();

    useEffect(() => {
        let response = requestPokeApi();
        console.log(response);
    }, [])

    return (
        <ContentPokedex>
            <HeaderPokedex>
                <h1>Pokedex</h1>
                <ContentSearch>
                    <input />
                    <button>Go</button>
                </ContentSearch>
            </HeaderPokedex>
        </ContentPokedex>
    )
}

export default Pokedex;