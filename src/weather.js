import React from "react";

function Weather(props) {
  const { day, country, cityWeather, allDays } = props;
  let icon = day[0].weather[0].icon;
  let description = day[0].weather[0].description;
  return (
    <div className="weather">
      <div className="card  bg-light mb-3">
        <div className="card-header">
          <div className="card-title">{`Погода в городе ${cityWeather}`}</div>
          <div className="card-img">
            <img
              alt={description}
              className="img-fluid"
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            ></img>
            <p>{description}</p>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{cityWeather}</p>
          <p>{country}</p>
          <p>{`Температура ${day[0].main.temp} °C`} </p>
          <p>{`Влажность ${day[0].main.humidity} %`}</p>
          <p>{`Давления ${day[0].main.pressure} (мб)`}</p>
          <p>{`Скорость ветра ${day[0].wind.speed}`}</p>
          <p>{`Направления ветра ${day[0].wind.deg} градусов`}</p>
        </div>
        <div className="card-footer">
          <p>{`${day[0].thisDay} Число`}</p>
        </div>
      </div>
    </div>
  );
}
export default Weather;
