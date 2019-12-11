import React from "react";
import CanvasCard from "./canvasCard";
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
          <p>Температура</p>
          <CanvasCard
            allDays={allDays}
            day={day}
            width="330"
            height="100"
            item="temp"
          />
          <br></br>
          <p>Давление</p>
          <CanvasCard
            allDays={allDays}
            day={day}
            width="330"
            height="100"
            item="pressure"
          />
          <br></br>

          <p>Влажность</p>
          <CanvasCard
            allDays={allDays}
            day={day}
            width="330"
            height="100"
            item="humidity"
          />
        </div>
      </div>
    </div>
  );
}
export default Weather;
