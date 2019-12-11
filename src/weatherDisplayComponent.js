import React from "react";
import Weather from "./weather";
import FormWeather from "./formWeather";
function WeatherDisplayComponent({ reduxState }) {
  return (
    <div>
      <FormWeather inputCityValue={reduxState.inputCity} />
      <Weather weather={reduxState.weather} />
    </div>
  );
}

export default WeatherDisplayComponent;
