import React from 'react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    children: 'Checkbox'
  }
}

export const CheckboxWithLabel = () => <Checkbox label="Item 1" />
