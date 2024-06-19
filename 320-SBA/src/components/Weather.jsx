import React from 'react'
import './Weather.css'
import search_icon from '../assets/mgGlass.png'
import light_rain from '../assets/lightrain.png'
import partly_cloudly from '../assets/partlyCloudly.png'
import snow_fall from '../assets/snowfall.png'
import snow_flake from '../assets/snowflake.png'
import rain_shower from '../assets/rainShowers.png'
import storm_icon from '../assets/storm.png'
import sun_icon from '../assets/sun.png'

const Weather = () => {
  return (
    <div className="weatherOne">
      <div className="searchBar">
        <input type='text' placeholder='Search' />
        <img className="magGlass" src={search_icon} alt="" />
      </div>
    <img className="weather-icon" src={sun_icon} alt=""/>
      <p>70°F</p>
      <p>Madrid</p>
    </div>

  )
}

export default Weather