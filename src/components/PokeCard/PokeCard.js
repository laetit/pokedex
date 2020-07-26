import React from 'react'
import { useQuery } from 'react-query'
import { PokeBallLoading } from '../../components/loading'
import { fetchPokemonProfile } from '../../api'
import { typeColor } from '../../style'
import { capitalize } from '../../utils/string'
import { CardContainer } from './pokeCard.style'

const PokeCard = ({ name }) => {
    const { isLoading, error, data: res } = useQuery(`fetch-${name}`, () => fetchPokemonProfile(name))

    if (isLoading) return <PokeBallLoading />

    if (error) return "An error has occurred: " + error.message

    return (
        <CardContainer type={typeColor[res.types[0].type.name]}>
            <h4>{res.order}</h4>
            <img src={res.sprites.front_default} />
            <h4>{capitalize(name)}</h4>
        </CardContainer>
    )
}

export default PokeCard
