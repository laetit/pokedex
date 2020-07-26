import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Loading } from '../../components/loading'
import PokeCard from '../../components/pokeCard'
import { fetchPokedex, fetchGenerations } from '../../api'
import { PokeList } from './pokedex.style'

const Pokedex = ({ ger }) => {

    const { isLoading, error, data: res } = useQuery(`fetch-pokedex-${ger}`, () => fetchPokedex(ger))

    if (isLoading) return <Loading />

    if (error) return "An error has occurred: " + error.message

    return (
        <PokeList>
            {res.pokemon_entries.map(pokemon => {
                return <PokeCard name={pokemon.pokemon_species.name} />
            })}
        </PokeList>
    )
}

export default Pokedex