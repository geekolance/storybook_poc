import React, { useState } from "react";
import './stylesheet.css'
import Icon from '../../assets/arrow.png'
import { defaultitems } from "./config";

export const Dropdown = (props) => {
  const {
    onChange,
    placeholder = "Placeholder",
    items = defaultitems,
    multiSelect = false
  } = props

  let selectedItems = []
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState([]);
  const [display, setDisplay] = useState([])

  const onClick = (item) => {
    if (multiSelect) {
      selectedItems.push(item)
      setIsSelected(selected => [...selected, item.value])
      setDisplay(display => [...display, item.label])
    } else {
      selectedItems = item
      setIsSelected(item.value)
      setDisplay(item.label)
      setIsActive(!isActive)
    }
    if (onChange) onChange(selectedItems)
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
          {multiSelect ? selected.join(", ") : selected}
          {selected.length === 0 && placeholder}
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