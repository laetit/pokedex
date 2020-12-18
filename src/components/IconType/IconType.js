import React from 'react'
import { ReactComponent as bug } from 'assets/types/bug.svg'
import { ReactComponent as dark } from 'assets/types/dark.svg'
import { ReactComponent as dragon } from 'assets/types/dragon.svg'
import { ReactComponent as electric } from 'assets/types/electric.svg'
import { ReactComponent as fairy } from 'assets/types/fairy.svg'
import { ReactComponent as fighting } from 'assets/types/fighting.svg'
import { ReactComponent as fire } from 'assets/types/fire.svg'
import { ReactComponent as flying } from 'assets/types/flying.svg'
import { ReactComponent as ghost } from 'assets/types/ghost.svg'
import { ReactComponent as grass } from 'assets/types/grass.svg'
import { ReactComponent as ground } from 'assets/types/ground.svg'
import { ReactComponent as ice } from 'assets/types/ice.svg'
import { ReactComponent as normal } from 'assets/types/normal.svg'
import { ReactComponent as poison } from 'assets/types/poison.svg'
import { ReactComponent as psychic } from 'assets/types/psychic.svg'
import { ReactComponent as rock } from 'assets/types/rock.svg'
import { ReactComponent as steel } from 'assets/types/steel.svg'
import { ReactComponent as water } from 'assets/types/water.svg'

const types = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water
}

const IconType = ({type}) => {
  const Component = types[type]
  return Component ? <Component /> : <span />
}

export default IconType
