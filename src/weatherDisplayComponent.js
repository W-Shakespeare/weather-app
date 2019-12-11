import React from "react";
import Weather from "./weather";
import FormWeather from "./formWeather";
function WeatherDisplayComponent({ reduxState, getWeather }) {
  return (
    <div>
      <FormWeather
        inputCityValue={reduxState.inputCity}
        inputCountryValue={reduxState.inputCountry}
        getWeather={getWeather}
      />
      <Weather weather={reduxState.weather} />
    </div>
  );
}

export default WeatherDisplayComponent;
