import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PokeMenu from 'components/PokeMenu'
import Routes from 'routes'

const App = () => (
    <Router>
        <PokeMenu />
        <Routes />
    </Router>
)


export default App
