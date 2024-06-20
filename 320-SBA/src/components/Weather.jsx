import React, { useEffect, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/mgGlass.png'
import light_rain from '../assets/lightrain.png'
import partly_cloudly from '../assets/partlyCloudly.png'
import snow_fall from '../assets/snowfall.png'
import rain_shower from '../assets/rainShowers.png'
import storm_icon from '../assets/storm.png'
import sun_icon from '../assets/sun.png'
import wind_icon from '../assets/windSymbol.png'
import humid_icon from '../assets/humidityIcon.png'


const Weather = () => {

    const [apiData, setapiData] = useState(false);

    const weatherIcons = {
      "01d": sun_icon,
      "01n": sun_icon,
      "02d": partly_cloudly,
      "02n": partly_cloudly,
      "03d": partly_cloudly,
      "03n": partly_cloudly,
      "04d": partly_cloudly,
      "04n": partly_cloudly,
      "09d": light_rain,
      "09n": light_rain,
      "10d": rain_shower,
      "10n": rain_shower,
      "11d": storm_icon,
      "11n": storm_icon,
      "13d": snow_fall,
      "13d": snow_fall,
      "50d": humid_icon,
      "50n": humid_icon
    };
  const searchAPI = async (city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${import.meta.env.VITE_WEATHER_ID}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const icon = weatherIcons[data.weather[0].icon|| sun_icon]
        setapiData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon: icon

        })
      } catch (error) {
    }
  }
  useEffect(() => {
    searchAPI("Madrid")

  },[])
  return (
    <div className="weatherOne">
      <div className="searchBar">
        <input type='text' placeholder='Search' />
        <img className="magGlass" src={search_icon} alt="" />
      </div>
      <img className="weather-icon" src={sun_icon} alt="" />
      <p className="temp">{apiData.temperature}</p>
      <p className="city">Madrid</p>
      <div className='weathData'>
        <div className='col'>
          <img src={humid_icon} alt="" height={30} width={30} />
          <div>
            <p>60 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className='col'>
          <img src={wind_icon} alt="" height={30} width={30} />
          <div>
            <p>4.2 km/h </p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Weather
