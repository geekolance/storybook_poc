import React, { useState } from "react";
import './stylesheet.css'
import Icon from '../../assets/arrow.png'
import { defaultitems } from "./config";

export const Dropdown = (props) => {
  const {
    onChange,
    placeholder,
    items = defaultitems
  } = props

  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(placeholder || "Placeholder");

  const onClick = (item) => {
    setIsSelected(item.value)
    setIsActive(!isActive)
    if (onChange) onChange(item)
  }

  return (
    <>
      <div className="dropdown">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className={`dropdown-btn ${isActive ? 'active' : 'inactive'}`}
        >
          {selected}
          <span>
            <img src={Icon} className={`icon ${isActive ? "" : "unselected"}`} />
          </span>
        </div>
        <div
          className="dropdown-content"
          style={{ display: isActive ? "block" : "none" }}
        >
          {items.map((item) => {
            return <div
              onClick={(e) => {
                onClick(item)
              }}
              className="item"
            >
              {item.label}
            </div>
          })}
        </div>
      </div>
    </>
  );
}