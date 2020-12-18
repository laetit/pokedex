import styled from 'styled-components'

export const ContentPokeMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: visible;
  display: flex;
  background-color: ${({pokeType}) => pokeType.dark || '#fff'};
  color: ${({pokeType}) => pokeType.light || '#000'};
  padding: 12px 30px;
  border: 1px solid ${({pokeType}) => pokeType.light || '#000'};

  h1 {
    margin: 0;
    font-size: x-large;
  }

  img {
    width: 30px;
    height: 30px;
  }
`
