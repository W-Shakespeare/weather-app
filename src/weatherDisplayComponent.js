import React from "react";
import Weather from "./weather";
import FormWeather from "./formWeather";
function WeatherDisplayComponent({ reduxState, getWeather }) {
  return (
    <div className="weather_display">
      <FormWeather
        inputCityValue={reduxState.inputCity}
        inputCountryValue={reduxState.inputCountry}
        getWeather={getWeather}
      />
      <div className="weather_Days">
        {reduxState.allDays.map((arrDay, i, arr) => {
          console.log(arrDay);
          return (
            <Weather
              key={i}
              allDays={reduxState.allDays}
              day={arrDay}
              cityWeather={reduxState.cityWeather}
              country={reduxState.country}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WeatherDisplayComponent;
