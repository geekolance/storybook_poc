import React from "react"
import './stylesheet.css'

export const InfoContainer = (props) => {
  const {
    text,
    icon
  } = props

  return (
    <div className="info-container">
      {icon && <img src={icon} className="info-icon" />}
      {text}
    </div>
  )
}
