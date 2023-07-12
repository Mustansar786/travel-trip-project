import React from 'react'
import "./style.css";
export default function CustomButton({name, iconName, iconStart, iconEnd, classes, style, onClick}) {
  return (
    <>
      <button onClick={onClick} style={style} className={`custom-button flex items-center ${classes}`}>
      { iconStart && <img className='pr-2' src={iconName} />} {name} { iconEnd && <img className='pl-2' src={iconName} />}
        </button>
    </>
  )
}
