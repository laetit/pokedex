import React, { useState } from 'react'
import Select from './Select'
import { ContentPokeFilter } from './PokeFilter.style'

const minGeneration = 1
const maxGeneration = 15

const PokeFilter = ({ generations, onSelectedGeneration }) => {
  const [generation, setGeneration] = useState(2)

  return (
    <ContentPokeFilter>
      <h1>PokeDex</h1>
      <label>
        <p>Geração:</p>
        <Select
          list={generations}
          selectedOption={(e) => {
            console.log(e)
            setGeneration(e)
            onSelectedGeneration(e)
          }}
          selected={generation}
          min={minGeneration}
          max={maxGeneration} />
      </label>

    </ContentPokeFilter>
  )
}

export default PokeFilter