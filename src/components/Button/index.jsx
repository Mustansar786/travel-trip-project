import React from "react";
import { Input, Button } from "@material-tailwind/react";
import "./style.css";

export default function ButtonComponent({name, icon, iconName, classes, style, onClick}) {
    
    return (
      <>
        <button style={style} className={`mt-3 primary-button flex ${classes}`} onClick={onClick}>
                <p className={icon && `pt-1`}>{name} </p>
                {icon && 
                <div style={{width: 24, height: 24}} className="bg-white rounded-3xl ml-2">
                <img src={iconName} />
                </div>
                }  
        </button>
      </>
    );
  }