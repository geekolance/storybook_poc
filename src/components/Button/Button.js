import React from "react"
import './Button.css'

export const Button = (props) => {
  const { variant = 'primary',icon ,children, ...rest } = props
  return (
    <button className={`button ${variant}`} {...rest}>
      {icon && <img src={icon} className="button-icon"></img>}
      {children}
    </button>
  )
}
