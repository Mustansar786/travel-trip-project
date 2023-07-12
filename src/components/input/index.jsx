import React from 'react'
import "./style.css";
export default function InputField({label, placeholder, type, value, setState,classes}) {
  return (
    <>
    <label className='field-label pl-1'>{label}</label>
      <input className={`input-filed ${classes}`} type={type} placeholder={placeholder} value={value} onChange={(e)=> setState(e.target.value)} />
    </>
  )
}
