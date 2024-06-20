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
import wind_icon from '../assets/windSymbol.png'
import humid_icon from '../assets/humidityIcon.png'

const Weather = () => {
  return (
    <div className="weatherOne">
      <div className="searchBar">
        <input type='text' placeholder='Search' />
        <img className="magGlass" src={search_icon} alt="" />
      </div>
    <img className="weather-icon" src={sun_icon} alt=""/>
      <p className="temp">70°F</p>
      <p className="city">Madrid</p>
      <div className='weathData'>
        <div className='col'>
          <img src="" alt="" />
        </div>
      </div>
    </div>

  )
}

export default Weather