import React from 'react'
import './Nav.css'

export const Nav = (props) => {
  const {
    title,
    icon,
    label,
    variant = 'primary',
    children,
    ...rest
  } = props

  return (
    <button className={`homepage-nav ${variant}`} {...rest}>
      {icon && <img src={icon} className="nav-icon"></img>}
      {title && <div className='title'>{title}</div>}
      {label && <div className='label'>{label}</div>}
      {children}
    </button>
  )
}