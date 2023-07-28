import React from 'react'
import Button from './Button'
import figma from '../../assets/figma.png'
import figmaBlack from '../../assets/figma-black.png'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button'
  }
}

export const Primary1 = () => <Button variant='primary1'>Button</Button>
export const Primary2 = () => <Button variant='primary2'>Button</Button>
export const Primary3 = () => <Button variant='primary3'>Button</Button>
export const Secondary1 = () => <Button variant='secondary1'>Button</Button>
export const Secondary2 = () => <Button variant='secondary2'>Button</Button>
export const Secondary3 = () => <Button variant='secondary3'>Button</Button>

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

export const ButtonWithIconSecondary = Template.bind({})
ButtonWithIconSecondary.args = {
  variant: 'secondary1',
  icon: figmaBlack,
}

export const ButtonWithIconSecondary2 = Template.bind({})
ButtonWithIconSecondary2.args = {
  variant: 'secondary2',
  icon: figmaBlack,
}

export const ButtonWithIconSecondary3 = Template.bind({})
ButtonWithIconSecondary3.args = {
  variant: 'secondary3',
  icon: figmaBlack,
}