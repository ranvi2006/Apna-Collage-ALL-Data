import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import WbCloudyIcon from "@mui/icons-material/WbCloudy"; // Weather icon
import "./WeatherCard.css"
import CardMedia from '@mui/material/CardMedia';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

interface WeatherProps {
    ob:object
  description: string,
  feelsLike: number,
  humidity: number
  temp: number,
  tempMax: number,
  tempMin: number,
  
}
export default function WeatherCard({ob}:WeatherProps) {
  const coldImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREY_DbCwWXN5MucVqM9Sm6V5KvIG8OyVAfRQ&s";
  const hotImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRZwfQkZZSakpQIhl9oGHmAxUAcS-6vsxhw&s";
  const rainImage="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
  const image =
  ob.temp < 12
    ? coldImg
    : ob.humidity > 60
    ? rainImage
    : hotImage;
  return (
    <div className="weatherCard">
        
   
    <Card sx={{ maxWidth: 300, m: 2, p: 2, textAlign: "center", boxShadow: 3 }} >
    <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        
{ ob.temp < 12
    ? <WbCloudyIcon sx={{ fontSize: 50, color: "gray" }} />
    : ob.humidity > 60
    ? <ThunderstormIcon/>
    : <WbSunnyIcon/>}


        
        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
          {ob.description.toUpperCase()}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#007bff" }}>
          {ob.temp}°C
        </Typography>
        <Typography variant="body1">Feels Like: {ob.feelsLike}°C</Typography>
        <Typography variant="body1">Humidity: {ob.humidity}%</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Min: {ob.tempMin}°C | Max: {ob.tempMax}°C
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}


