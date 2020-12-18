import styled from 'styled-components'

export const ContentPokeFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  color: #9E9E9E;
  padding: 12px 30px;
  box-shadow: 2px 7px 7px #e0e0e0;
  margin-bottom: 20px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 0;
      margin-bottom: 16px;
    }

    select {
      color: #9E9E9E;
    }
  }
`