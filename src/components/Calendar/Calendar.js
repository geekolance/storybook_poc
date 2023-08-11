import React, { useState } from "react"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment/moment";
import Icon from '../../assets/arrow.png'
import './customCalendar.css'
// import './calendar.css';

const CustomCalendar = (props) => {
  const {

  } = props

  const [isActive, setIsActive] = useState(false);
  const [date, setDate] = useState(new Date());

  return <>
    <div className="dropdown">
      <div
        onClick={(e) => {
          setIsActive(!isActive);
        }}
        className={`dropdown-btn ${isActive ? 'active' : 'inactive'}`}
      >
        {!date && 'Select a date'}
        {date && moment(date).format('DD/MM/YYYY')}
        <span>
          <img src={Icon} className={`icon ${isActive ? "" : "unselected"}`} />
        </span>
      </div>
      <div
        className="calendar-content"
        style={{ display: isActive ? "block" : "none" }}
      >
        <Calendar
          className={isActive ? 'react-calendar-active' : 'react-calendar-inactive'}
          onChange={setDate}
          value={date}
        />
      </div>
    </div>
  </>
}

export default CustomCalendar