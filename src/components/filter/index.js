import React, { useState } from 'react'
import "./style.css"
import { links } from '../../assets/images-links'
function Filter() {

  const [selectedFilter,setSelectedFilter]=useState();
  
  return (
    <div className='Filter-div'>
      {links.map((item, i) => (
        <div
         key={i} 
        className={`links-box ${i == selectedFilter && "selected-box"}`}
        onClick={()=> {
          console.log("selecting Key", i);
        setSelectedFilter(i);
        }}
        >
        <img src={item.imgSrc} className='links-img' />
        <p className={`links-label ${i == selectedFilter && "selected-label"}`}>
          {item.label}
          </p> 
        </div>
        ))}
    </div>
  )
}

export default Filter