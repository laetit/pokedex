import React, { useState } from 'react'
import Pokedex from './pages/Pokedex'

const App = () => {
    const [pokemonSelected, setPokemonSelected] = useState('')

    return (
        <>
            {pokemonSelected ? <div>{pokemonSelected}</div> : <Pokedex pokemonSelected={setPokemonSelected} />}
        </>
    )
}

export default App
