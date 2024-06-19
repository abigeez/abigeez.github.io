import React from 'react'
import './Weather.css'
import search_icon from '../assets/mgGlass.png'
const Weather = () => {
  return (
    <div className="weatherOne">
       <div className="searchBar">
        <input type='text' placeholder='Search'/>
        <img className="magGlass"src={search_icon} alt="" /> 
       </div>
    </div>

  )
}

export default Weather