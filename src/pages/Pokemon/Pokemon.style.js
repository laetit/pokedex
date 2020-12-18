import styled from 'styled-components'
import { typeColor } from 'style'
import { getPokeType } from 'utils/layout'

export const PokemonContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 130px;
  justify-content: space-evenly;
  background-color: ${() => typeColor[getPokeType()].dark};
  color: ${() => typeColor[getPokeType()].light};

  @media(max-width: 800px) {
    overflow: hidden;
    padding-top: 40px;
  }
`

export const PokemonApresentation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 30px;
  font-style: italic;

  h1, h2, h3 {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 56px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 1em;
      background-color: ${() => typeColor[getPokeType()].light};
      height: 2px;
      width: 200%;
    }
  }

  h3 {
    font-size: 42px;
    font-weight: 300;
  }

  img {
    z-index: 2;
    margin-left: 5em;
    height: 300px;

    @media(max-width: 800px) {
      margin: 0;
    }
  }

  @media(max-width: 800px){
    flex-direction: column-reverse;
  }
`

export const PokemonDescription = styled.div`
  max-width: 200px;
  span+span {
    margin-left: 10px;
  }
`

export const PokemonTypes = styled.div`
  display: flex;
  padding: 30px 40px;
  justify-content: space-between;
`

export const Type = styled.div`
  margin: 0 10px;
  text-align: center;

  svg {
    width: 30px;
    height: 30px;
    path{
      fill: ${() => typeColor[getPokeType()].light};
    }
  }

  p {
    margin: 10px 0;
    font-style: normal;
  }
`