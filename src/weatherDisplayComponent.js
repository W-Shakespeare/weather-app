import React from "react";
function WeatherDisplayComponent({ weather }) {
  let city = { ...weather.city };
  let { population, name } = city;
  console.log(weather);
  console.log(city);
  return (
    <div>
      <p>{`Город ${name}`}</p>;
      <p>{`Численость населения ${population} чел.`}</p>;
    </div>
  );
}

export default WeatherDisplayComponent;
