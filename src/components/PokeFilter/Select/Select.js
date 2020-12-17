import React from 'react'
import { capitalize } from 'utils/string'

const Select = ({ list, selectedOption, selected, min, max }) => (
  <select selected={selected} onChange={(e) => selectedOption(e.target.value)}>
    {list.map((opt, idx) => {
      if (idx >= min && idx <= max) {
        return <option key={idx} value={opt.name}>
          {capitalize(opt.name)}
        </option>
      }
    })}
  </select>
)

export default Select
