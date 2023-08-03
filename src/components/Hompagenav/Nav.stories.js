import React from 'react'
import { Nav } from './Nav'
import plusIcon from '../../assets/plus-icon.png'

export default {
  title: 'Nav/Homepage nav',
  component: Nav,
  args: {
    children: 'nav'
  }
}

// const Template = args => <Nav {...args} />

export const Primary = () => <Nav label = 'label' variant='primary' icon={plusIcon} />
export const Secondary = () => <Nav title='0' label = 'label' variant='secondary' />