import React from "react";
import CanvasCard from "./canvasCard";
function Weather(props) {
  const { day, country, cityWeather, allDays, population } = props;
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
            <p className="p-logo">{description}</p>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{cityWeather}</p>
          <p>{country}</p>
          <p>{`Население ${population} чел.`}</p>
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
            color="rgba(240, 128, 128, 0.156)"
          />
          <br></br>
          <p>Давление</p>
          <CanvasCard
            allDays={allDays}
            day={day}
            width="330"
            height="100"
            item="pressure"
            color="rgba(144, 238, 144, 0.152)"
          />
          <br></br>

          <p>Влажность</p>
          <CanvasCard
            allDays={allDays}
            day={day}
            width="330"
            height="100"
            item="humidity"
            color="rgba(32, 178, 171, 0.144)"
          />
        </div>
      </div>
    </div>
  );
}
export default Weather;
