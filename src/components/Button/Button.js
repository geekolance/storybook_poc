import React from 'react'
import './Button.css'

function Button (props) {
  const { variant = 'primary',icon ,children, ...rest } = props
  return (
    <button className={`button ${variant}`} {...rest}>
      {icon && <img src={icon} className="button-icon"></img>}
      {children}
    </button>
  )
}

export default Button