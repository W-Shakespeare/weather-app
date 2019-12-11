import React, { useEffect, useState } from "react";
import WeatherDisplayComponent from "./weatherDisplayComponent";

function WeatherDisplayContainer(props) {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    getWeather(undefined);
  }, []);

  const getWeather = event => {
    let city = "Odessa";
    const API = "08388c6e81f8cd461b38ce8d8b5c4815";
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},ua&appid=${API}&units=metric`
    )
      .then(i => i.json())
      .then(weatherNow => {
        setWeather({ ...weatherNow });
        console.log(weatherNow);
      });
  };

  return <WeatherDisplayComponent weather={weather} />;
}
export default WeatherDisplayContainer;
