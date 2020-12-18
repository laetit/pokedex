import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Loading } from 'components/loading'
import PokeFilter from 'components/PokeFilter'
import PokeCardContainer from 'components/PokeCardContainer'
import { setPokeType } from 'utils/layout'
import { fetchGenerations } from 'api'

const Generation = () => {

  setPokeType('')

  const { isLoading, error, data: res } = useQuery(`fetch-generation`, () => fetchGenerations())
  const [generation, setGeneration] = useState('kanto')

  if (isLoading) return <Loading />

  if (error) return "An error has occurred: " + error.message

  return (
    <div>
      <PokeFilter generations={res.results} onSelectedGeneration={setGeneration} />
      <PokeCardContainer ger={generation} />
    </div>
  )
}

export default Generation