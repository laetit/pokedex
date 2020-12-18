import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pokedex from 'pages/Pokedex'
import Pokemon from 'pages/Pokemon'
import Generation from 'pages/Generation'
import { URLS } from 'utils/url.js'

const Routes = () => (
  <Switch>
    <Route exact path={`${URLS.POKEMON}:poke`} component={Pokemon} />
    <Route exact path={`${URLS.GENERATION}:gen`} component={Generation} />
    <Route exact path={`${URLS.GAME}:game`} component={<div>Game</div>} />
    <Route exact path={`${URLS.TYPE}:type`} component={<div>Type</div>} />
    <Route exact path={URLS.POKEDEX} component={Pokedex} />
  </Switch>
)


export default Routes
