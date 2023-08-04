import React from 'react'
import './stylesheet.css'
import icon from '../../assets/arrow.png'

export const SideMenuButton = (props) => {
  const {
    variant,
    label,
    ...rest
  } = props

  return (
    <button className={`sidemenu-button ${variant}`} {...rest}>
      {label && <div className='sidemenu-label'>{label}</div>}
      <img src={icon} className="sidemenu-icon" />
    </button>
  )
}