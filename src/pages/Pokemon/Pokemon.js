import React from 'react'
import { useQuery } from 'react-query'
import { capitalize } from 'utils/string'
import { PokeBallLoading } from 'components/loading'
import IconType from 'components/IconType'
import { fetchPokemonProfile } from 'api'
import { setPokeType } from 'utils/layout'
import { PokemonContent, PokemonApresentation, PokemonTypes, Type } from './Pokemon.style'

const Pokemon = ({ match }) => {
  const { isLoading, error, data: poke } = useQuery(`fetch-${match.params.poke}`, () => fetchPokemonProfile(match.params.poke))

  if (isLoading) return <PokeBallLoading />

  if (error) return "An error has occurred: " + error.message //TODO: desenvolver componente para erro

  setPokeType(poke.types[0].type.name)

  console.log(poke)
  return (
    <PokemonContent>
      <PokemonApresentation>
        <div>
          <h3>#{poke.id}</h3>
          <h2>{capitalize(poke.name)}</h2>
          <PokemonTypes>
            {poke.types.map((obj, idx) => {
              return <Type>
                <IconType type={obj.type.name} />
                <p key={idx}>{capitalize(obj.type.name)}</p>
              </Type>
            })}
          </PokemonTypes>
        </div>
        <img src={poke.sprites.other['official-artwork'].front_default} />
      </PokemonApresentation>
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

