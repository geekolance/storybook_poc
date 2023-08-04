import React from "react"
import { Dropdown } from "./Dropdown"

export default {
  title: 'Form/Dropdown',
  component: Dropdown,
  args: {
    children: 'Dropdown'
  }
}

export const singleSelect = () => <Dropdown />