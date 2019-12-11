import React from "react";

function Weather({ weather }) {
  let city = { ...weather.city };
  let { population, name } = city;
  return (
    <div>
      <p>{`Город ${name}`}</p>;
      <p>{`Численость населения ${population} чел.`}</p>;
    </div>
  );
}
export default Weather;
