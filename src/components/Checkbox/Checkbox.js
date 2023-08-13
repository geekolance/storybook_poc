import React from 'react'
import './stylesheet.css'

export const Checkbox = (props) => {
  const {
    label = 'Item 1',
    checked = true
  } = props

  return (
    <div className='smrt-checkbox-container'>
      <input type="checkbox" class="smrt-checkbox" id="myinput" />
      <label class="smrt-checkbox-label" for="myinput">{label}</label>
    </div>
  )
}