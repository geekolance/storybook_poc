import React from 'react'
import { OrderContainer } from './OrderContainer'

export default {
  title: 'Components/Order container',
  component: OrderContainer,
  args: {
    children: 'Order Container'
  }
}

export const OrderProgress = () => <OrderContainer variant='progress' />
export const OrderScheduled = () => <OrderContainer variant='scheduled' />
export const OrderReady = () => <OrderContainer variant='ready' />
