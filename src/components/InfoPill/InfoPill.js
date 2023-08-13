import React from 'react'
import './stylesheet.css'

export const InfoPill = (props) => {
  const {
    variant = 'primary',
    className = '',
    text = 'info',
    icon
  } = props

  return (
    <div
      className={`info-pill info-pill-${variant} ${className}`}
    >
      {icon && <img src={icon} className="button-icon" />}
      {text}
    </div>
  )
}
