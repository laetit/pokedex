import React, { useState } from 'react'
import { Accordion, Title, AccordionContent } from './PokeAccordion.style'

const PokeAccordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Accordion onClick={() => setOpen(!open)}>
      <Title>{title}</Title>
      <AccordionContent open={open}>{children}</AccordionContent>
    </Accordion>
  )
}

export default PokeAccordion
