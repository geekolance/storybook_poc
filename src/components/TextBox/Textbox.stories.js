import React from 'react'
import { TextBox } from './TextBox'

export default {
  title: 'Components/TextBox',
  component: TextBox,
  args: {
    children: 'TextBox'
  }
}

export const Primary = () => <TextBox text='Info' variant='primary' />