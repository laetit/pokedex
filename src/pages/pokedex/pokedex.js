import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Loading } from 'components/loading'
import PokeFilter from 'components/PokeFilter'
import PokeCardContainer from 'components/PokeCardContainer'
import { capitalize } from 'utils/string'
import { fetchGenerations } from 'api'

const Pokedex = () => {
  const minGeneration = 2
  const maxGeneration = 15
  const [generation, setGeneration] = useState(2)
  const { isLoading, error, data: res } = useQuery(`fetch-generation`, () => fetchGenerations())

  if (isLoading) return <Loading />

  if (error) return "An error has occurred: " + error.message

  return (
    <div>
      <PokeFilter />
      {res.results.map((gen, idx) => {
        if (idx >= minGeneration && idx <= maxGeneration) {
          return <div key={idx} onClick={() => setGeneration(idx)}>
            <h4>{capitalize(gen.name)}</h4>
          </div>
        }
      })}
      <PokeCardContainer ger={generation} />
    </div>
  )
}

export default Pokedex