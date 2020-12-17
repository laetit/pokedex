import React from 'react'
import { useQuery } from 'react-query'
import { Loading } from '../../components/loading'
import PokeCard from '../../components/PokeCard'
import { fetchPokedex } from '../../api'
import { PokeList } from './PokeCardContainer.style'

const PokeCardContainer = ({ ger }) => {

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

export default PokeCardContainer