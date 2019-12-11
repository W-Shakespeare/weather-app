import React from "react";
import Weather from "./weather";
import FormWeather from "./formWeather";
function WeatherDisplayComponent({ weather }) {
  return (
    <div>
      <FormWeather />
      <Weather weather={weather} />
    </div>
  );
}

export default WeatherDisplayComponent;
