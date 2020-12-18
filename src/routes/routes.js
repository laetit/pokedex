import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pokedex from 'pages/Pokedex'
import Pokemon from 'pages/Pokemon'
import { URLS } from 'utils/url.js'

const Routes = () => (
  <Switch>
    <Route exact path={URLS.POKEMON} component={Pokemon} />
    <Route exact path={URLS.POKEDEX} component={Pokedex} />
  </Switch>
)


export default Routes
