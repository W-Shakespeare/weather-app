import React from "react";
function WeatherDisplayComponent({ weather }) {
  // const population = weather.city.population;
  let city = { ...weather.city };
  let { population, name } = city;
  console.log(city.population);
  return (
    <div>
      <p>{`Город ${name}`}</p>;
      <p>{`Численость населения ${population} чел.`}</p>;
    </div>
  );
}

export default WeatherDisplayComponent;
