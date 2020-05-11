import React, { useEffect } from 'react';

export default function useWeatherAPI(options="hourly,daily") {
    const [weatherData,setWeatherData] = React.useState({});
    
    useEffect(()=>{
        async function getCurrentWeather(position) {
            const {latitude : lat,longitude : lon} = position.coords;
            const data=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${options}&appid=${process.env.REACT_APP_WEATHERAPIKEY}`)
            const jsonData= await data.json();
            const {current} = jsonData;
            setWeatherData(current);
        }
        navigator.geolocation && navigator.geolocation.getCurrentPosition(getCurrentWeather);
    },[]);
    
    return weatherData;
}