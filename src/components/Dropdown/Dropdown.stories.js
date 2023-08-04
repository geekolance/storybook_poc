import React from "react"
import { Dropdown } from "./Dropdown"
import { sample1 } from "./config"

export default {
  title: 'Form/Dropdown',
  component: Dropdown,
  args: {
    children: 'Dropdown'
  }
}

const onChange = (item) => {
  alert(item.value)
}

export const singleSelect = () => <Dropdown
  items={sample1}
  placeholder="Please select"
  onChange={onChange}
/>