import React, { useState } from 'react'
import SearchBox from './SearchBox'
import WeatherCard from './WeatherCard'
interface WeatherProps {
    ob:object
  description: string,
  feelsLike: number,
  humidity: number
  temp: number,
  tempMax: number,
  tempMin: number,
  
}

export default function WeatherApp() {

    const [weatherData,setWeatherData]=useState({
      description: "", 
       feelsLike: 0,
      humidity: 0,
      temp: 0,
      tempMax: 0,
      tempMin: 0,
      
    });

    function printHello(ob:WeatherProps)
    {
        setWeatherData(ob);
        console.log(ob);
    }
  return (
   <>
   <SearchBox setWeathers={printHello}/>
   {weatherData.temp!=0?<WeatherCard ob={weatherData} />: null}
   </>
  )
}
