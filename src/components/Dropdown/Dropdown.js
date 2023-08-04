import React, { useState } from "react";
import './stylesheet.css'
import Icon from '../../assets/arrow.png'

export const Dropdown = () => {
  const [selected, setSelected] = useState(false)
  return (
    <div className="dropdown">
      <div class="input-icons" onClick={() => setSelected(!selected)}>
        <img src={Icon} className={`icon ${selected ? "" : "unselected"}`} />
        <input
          className="input-field"
          type="text"
          placeholder="Type to filter"
        />
        <ul class="value-list">
          <li>Elon Musk</li>
          <li>Bill Gates</li>
        </ul>
      </div>
    </div>
  )
}