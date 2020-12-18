import React from 'react'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'
import { PokeBallLoading } from 'components/loading'
import { fetchPokemonProfile } from 'api'
import { typeColor } from 'style'
import { capitalize } from 'utils/string'
import { URLS } from 'utils/url.js'
import { CardContainer } from './PokeCard.style'

const PokeCard = ({ name }) => {
    const history = useHistory()
    const { isLoading, error, data: res } = useQuery(`fetch-${name}`, () => fetchPokemonProfile(name))

    if (isLoading) return <PokeBallLoading />

    if (error) return "An error has occurred: " + error.message //TODO: desenvolver componente para erro 

    return (
        <CardContainer onClick={() => history.push(`${URLS.POKEMON}${name}`)} type={typeColor[res.types[0].type.name]}>
            <h4>{res.id}</h4>
            <img src={res.sprites.front_default} />
            <h4>{capitalize(name)}</h4>
        </CardContainer>
    )
}

export default PokeCard
