import React from 'react'
import NormalLoadingGif from '../../assets/normal-loading.gif'
import { ContentPokeMenu } from './PokeMenu.style'

const PokeMenu = () => (
  <ContentPokeMenu>
    <h1>PokeDex</h1>
    <img src={NormalLoadingGif} />
  </ContentPokeMenu>
)

export default PokeMenu