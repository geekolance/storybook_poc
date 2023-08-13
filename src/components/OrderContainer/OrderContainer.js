import React from 'react'
import './Stylesheet.css'
import { Button } from '../Button'
import editIcon from '../../assets/edit-icon.png'
import schedule_delivery_white from '../../assets/schedule-delivery-white.svg'

export const OrderContainer = (props) => {
  const {
    header = 'Day, 01/01',
    pickupAddress = 'Address',
    Progress = 'Progress Info',
    delivery = '01/01 0:00AM/PM - 0:00AM/PM',
    variant = 'scheduled',
    deliveryInfo = '*Deliver as soon as order is completed'
  } = props

  return <div className={`order-container ${variant}`}>
    <div className='order-container-section'>
      <div className='order-container1'>
        {/* Header */}
        <div className='order-container-header'>
          {header}
        </div>

        {/* Pickup details */}
        <div className='order-container-line'>
          <div className='order-container-subheading'>
            Pick Up At
          </div>
          <div className='order-container-text'>
            {header}
          </div>
        </div>

        {/* Progress details */}
        <div className='order-container-line'>
          <div className='order-container-subheading'>
            Progress
          </div>
          <div className='order-container-text'>
            {Progress}
          </div>
        </div>

        {/* Delivery details */}
        {variant !== 'scheduled' && (
          <div className='order-container-line'>
            <div className='order-container-subheading'>
              Delivery
            </div>
            <div className='order-container-text'>
              {delivery}
            </div>
          </div>
        )}
      </div>
      {/* Edit Button */}
      {variant !== 'ready' && (
        <div className='order-container2'>
          <Button
            variant='smallSecondary1 order-edit-button'
            icon={editIcon}
          >
            Edit
          </Button>
        </div>
      )}
    </div>
    {/* Schedule delivery variant */}
    {variant === 'scheduled' && (
      <>
        <hr></hr>
        <div className='order-info-section'>
          {deliveryInfo}
        </div>
        <Button
          variant='primary1 schedule-button'
          icon={schedule_delivery_white}
        >
          Schedule For Delivery
        </Button>
      </>
    )}
  </div>
}