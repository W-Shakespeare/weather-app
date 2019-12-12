import React from "react";
import Weather from "./weather";
import FormWeather from "./formWeather";
function WeatherDisplayComponent({
  reduxState,
  getWeather,
  getArrEight,
  concatArr
}) {
  return (
    <div className="weather_display">
      <div className="logo">WEATHER</div>
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
              day={
                arrDay.length === 0
                  ? getArrEight(concatArr(reduxState.allDays))
                  : arrDay
              }
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
