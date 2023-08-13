import React from 'react'
import { InfoPill } from './InfoPill'
import AppleWhite from '../../assets/apple-white.png'
import AppleBlack from '../../assets/apple-black.png'

export default {
  title: 'Components/Infopill',
  component: InfoPill,
  args: {
    children: 'InfoPill'
  }
}

// const Template = args => <Nav {...args} />

export const Primary = () => <InfoPill text='Info' variant='primary' />
export const Color = () => <InfoPill text='Info' variant='color' />
export const Default = () => <InfoPill text='Info' variant='default' />

export const PrimaryWithIcon = () => <InfoPill text='Info' variant='primary' icon={AppleBlack} />
export const ColorWithIcon = () => <InfoPill text='Info' variant='color' icon={AppleWhite} />
export const DefaultWithIcon = () => <InfoPill text='Info' variant='default' icon={AppleWhite} />
