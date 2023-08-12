import React from 'react'
import plusIcon from '../../assets/plus-icon.png'
import CustomCalendar from './Calendar'

export default {
  title: 'Form/Calendar',
  component: CustomCalendar,
  args: {
    children: 'Calendar'
  }
}

export const Primary = () => <CustomCalendar />