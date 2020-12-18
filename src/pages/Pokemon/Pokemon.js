import React from 'react'
import { useQuery } from 'react-query'
import { capitalize } from 'utils/string'
import { typeColor } from 'style'
import { PokeBallLoading } from 'components/loading'
import { fetchPokemonProfile } from 'api'
import { setPokeType } from 'utils/layout'
import { PokemonContent, PokemonApresentation } from './Pokemon.style'

const Pokemon = ({ match }) => {
  const { isLoading, error, data: poke } = useQuery(`fetch-${match.params.poke}`, () => fetchPokemonProfile(match.params.poke))

  if (isLoading) return <PokeBallLoading />

  if (error) return "An error has occurred: " + error.message //TODO: desenvolver componente para erro

  const pokeType = typeColor[poke.types[0].type.name]
  setPokeType(pokeType)

  console.log(poke)
  return (
    <PokemonContent pokeType={pokeType}>
      <PokemonApresentation>
        <div>
          <h3>#{poke.order}</h3>
          <h2>{capitalize(poke.name)}</h2>
        </div>
        <img src={poke.sprites.other.dream_world.front_default} />
      </PokemonApresentation>
      <div>
        <h3>Tipos</h3>
        <div>{poke.types.map((obj, idx) => {
          return <div key={idx}>{capitalize(obj.type.name)}</div>
        })}</div>
      </div>
      <div>
        <h3>Aparece em</h3>
        <div>
          {poke.game_indices.map((game, idx) => {
            return <div key={idx}>{capitalize(game.version.name)}</div>
          })}
        </div>
      </div>
    </PokemonContent>
  )
}

export default Pokemon

