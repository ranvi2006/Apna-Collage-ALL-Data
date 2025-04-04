import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { Description } from '@mui/icons-material';

interface WeatherData {
    description: string;
    feelsLike: number;
    humidity: number;
    temp: number;
    tempMax: number;
    tempMin: number;
  }
  
  interface Props {
    setWeather: (weather: WeatherData) => void;
  }

export default function SearchBox({setWeathers}:Props) {
    const [city, setCity] = useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="c2144c92f15aacd7e851234369055244";

    function handleInput(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setCity(e.target.value);
    }
    async function getWeather() {
        const api=`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

        let respone=await fetch(api);
       const  jsonRespone=await respone.json();

       let result={
        temp:jsonRespone.main.temp,
        tempMin:jsonRespone.main.temp_min,
        tempMax:jsonRespone.main.temp_max,
        humidity:jsonRespone.main.humidity,
        feelsLike:jsonRespone.main.feels_like,
        description:jsonRespone.weather[0].description
       }
        setWeathers(result);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        getWeather();
        console.log(city);
        setCity("");
    }
    return (
        <div className='searchBox'>
            <h3>Serch for the weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Enter City"
                    variant="outlined"
                    onChange={handleInput}
                    value={city}
                    required />
                <br />
                <Button
                    type='submit'
                    variant="contained"
                >Contained</Button>
            </form>

        </div>
    )
}
