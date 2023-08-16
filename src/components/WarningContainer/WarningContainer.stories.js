import React from 'react'
import { WarningContainer } from './WarningContainer'

export default {
  title: 'Components/WarningContainer',
  component: WarningContainer,
  args: {
    children: 'Warning Container'
  }
}

export const Primary = () => <WarningContainer text='Info' />