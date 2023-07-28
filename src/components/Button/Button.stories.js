import React from 'react'
import Button from './Button'
import figma from '../../assets/figma.png'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button'
  }
}

export const Primary1 = () => <Button variant='primary1'>Primary</Button>
export const Primary2 = () => <Button variant='primary2'>Primary</Button>
export const Primary3 = () => <Button variant='primary3'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>

const Template = args => <Button {...args} />

export const ButtonWithIconPrimary = Template.bind({})
ButtonWithIconPrimary.args = {
  variant: 'primary1',
  icon: figma,
}

export const ButtonWithIconPrimary2 = Template.bind({})
ButtonWithIconPrimary2.args = {
  variant: 'primary2',
  icon: figma,
}

export const ButtonWithIconPrimary3 = Template.bind({})
ButtonWithIconPrimary3.args = {
  variant: 'primary3',
  icon: figma,
}