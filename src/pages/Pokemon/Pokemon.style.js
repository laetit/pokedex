import styled from 'styled-components'

export const PokemonContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 130px;
  justify-content: space-evenly;
  background-color: ${props => props.pokeType.dark};
  color: ${props => props.pokeType.light};

  h1, h2, h3 {
    margin: 0;
    padding: 0;
  }
`

export const PokemonApresentation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  font-style: italic;

  h2 {
    font-size: 56px;
  }

  h3 {
    font-size: 42px;
    font-weight: 300;
  }

  img {
    margin: 0 5em;
    height: 300px;
  }
`