import React from 'react'
import './Nav.css'

export const Nav = (props) => {
  const { text = '0', url, label = 'label', ...rest } = props
  return (
    <button className={`homepage-nav ${variant}`} {...rest}>
      {url && <img src={icon} className="button-icon"></img>}
    </button>
  )
}