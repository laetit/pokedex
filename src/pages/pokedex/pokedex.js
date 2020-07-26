import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Loading } from '../../components/loading'
import PokeCard from '../../components/pokeCard'
import { fetchGeneration } from '../../api'
import { PokeList } from './pokedex.style'

const Pokedex = () => {

    const [ger, setGer] = useState(2)
    const { isLoading, error, data: res } = useQuery(`fetch-generation-${ger}`, () => fetchGeneration(ger))

    if (isLoading) return <Loading />

    if (error) return "An error has occurred: " + error.message

    return (
        <div>
            <div>
                <button onClick={() => setGer(3)}>teste</button>
                Aqui vai ser o tab
            </div>
            <PokeList>
                {res.pokemon_entries.map(pokemon => {
                    return <PokeCard name={pokemon.pokemon_species.name} />
                })}
            </PokeList>
        </div>
    )
}

export default Pokedex