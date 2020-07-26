import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Loading } from './components/loading'
import Pokedex from './pages/pokedex'
import { capitalize } from './utils/string'
import { fetchGenerations } from './api'


const App = () => {
    const minGeneration = 2
    const maxGeneration = 15
    const [generation, setGeneration] = useState(2)
    const { isLoading, error, data: res } = useQuery(`fetch-generation`, () => fetchGenerations())

    if (isLoading) return <Loading />

    if (error) return "An error has occurred: " + error.message

    return (
        <div>
            {res.results.map((gen, idx) => {
                if (idx >= minGeneration && idx <= maxGeneration) {
                    return <div key={idx} onClick={() => setGeneration(idx)}>
                        <h4>{capitalize(gen.name)}</h4>
                    </div>
                }
            })}
            <Pokedex ger={generation} />
        </div>
    )
}

export default App