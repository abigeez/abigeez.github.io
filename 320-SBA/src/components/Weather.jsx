import React from 'react'
import './Weather.css'
import search_icon from '../assets/mgGlass.png'
import light_rain from '../assets/lightrain.png'
import partly_cloudly from '../assets/partlyCloudy.png'
import snow_fall from '../assets/snowfall.png'
import search_icon from '../assets/mgGlass.png'
import search_icon from '../assets/mgGlass.png'
import search_icon from '../assets/mgGlass.png'
import search_icon from '../assets/mgGlass.png'

const Weather = () => {
  return (
    <div className="weatherOne">
       <div className="searchBar">
        <input type='text' placeholder='Search'/>
        <img className="magGlass"src={search_icon} alt="" /> 
       </div>
       <img src="" alt="" />
    </div>

  )
}

export default Weather