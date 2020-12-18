import styled from 'styled-components'
import { typeColor } from 'style'
import { getPokeType } from 'utils/layout'

export const Accordion = styled.div`
  background-color: ${() => typeColor[getPokeType()].dark};
  color: ${() => typeColor[getPokeType()].light};
  border: 1px solid ${() => typeColor[getPokeType()].light};
`

export const Title = styled.h3`
  margin: 0;
  padding: 20px;
  border-bottom: 1px solid;
`

export const AccordionContent = styled.div`
  overflow: hidden;
  height: ${({ open }) => open ? 'auto' : '0'};
  background-color: ${() => typeColor[getPokeType()].dark};
  color: ${() => typeColor[getPokeType()].light};
`