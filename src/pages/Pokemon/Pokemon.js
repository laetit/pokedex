import React from 'react'
import { useQuery } from 'react-query'
import { capitalize } from 'utils/string'
import { PokeBallLoading } from 'components/loading'
import IconType from 'components/IconType'
import PokeAccordion from 'components/PokeAccordion'
import { fetchPokemonProfile, fetchPokemonSpecie } from 'api'
import { setPokeType } from 'utils/layout'
import { PokemonContent, PokemonApresentation, PokemonDescription, PokemonTypes, Type } from './Pokemon.style'

const Pokemon = ({ match }) => {
  const { isLoading: isLoadingProfile, error: errorProfile, data: pokeProfile } = useQuery(`fetch-${match.params.poke}-profile`, () => fetchPokemonProfile(match.params.poke))
  const { isLoading: isLoadingSpecie, error: errorSpecie, data: pokeSpecie } = useQuery(`fetch-${match.params.poke}-specie`, () => fetchPokemonSpecie(match.params.poke))


  if (isLoadingProfile || isLoadingSpecie) return <PokeBallLoading />

  if (errorProfile || errorSpecie) return "An error has occurred: " + errorProfile.message + errorSpecie.message //TODO: desenvolver componente para erro

  setPokeType(pokeProfile.types[0].type.name)

  console.log(pokeProfile, pokeSpecie)
  return (
    <PokemonContent>
      <PokemonApresentation>
        <div>
          <h3>#{pokeProfile.id}</h3>
          <h2>{capitalize(pokeProfile.name)}</h2>
          <PokemonTypes>
            {pokeProfile.types.map((obj, idx) => {
              return <Type>
                <IconType type={obj.type.name} />
                <p key={idx}>{capitalize(obj.type.name)}</p>
              </Type>
            })}
          </PokemonTypes>
        </div>
        <img src={pokeProfile.sprites.other['official-artwork'].front_default} />
        <PokemonDescription>
          <p>Weight: {pokeProfile.weight/10}kg</p>
          <p>Height: {pokeProfile.height/10}m</p>
          <p>{pokeSpecie.flavor_text_entries[1].flavor_text}</p>
        </PokemonDescription>
      </PokemonApresentation>
      <PokeAccordion title='Aparece em'>
        {pokeProfile.game_indices.map((game, idx) => {
          return <div key={idx}>{capitalize(game.version.name)}</div>
        })}
      </PokeAccordion>
    </PokemonContent>
  )
}

export default Pokemon

