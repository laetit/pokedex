import React from 'react'
import NormalLoadingGif from '../../assets/normal-loading.gif'
import { typeColor } from 'style'
import { getPokeType } from 'utils/layout'
import { ContentPokeMenu } from './PokeMenu.style'

console.log(typeColor[getPokeType()])

const PokeMenu = () => (
  <ContentPokeMenu pokeType={typeColor[getPokeType()]}>
    <h1>PokeDex</h1>
    <img src={NormalLoadingGif} />
  </ContentPokeMenu>
)

export default PokeMenu