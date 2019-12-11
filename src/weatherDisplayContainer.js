import React, { useEffect, useState } from "react";
import WeatherDisplayComponent from "./weatherDisplayComponent";
import { get_Weather_From_Server } from "./duck/actions/actions";
import { connect } from "react-redux";
function WeatherDisplayContainer(props) {
  const [weather, setWeather] = useState([]);
  const { reduxState } = props;
  useEffect(() => {
    getWeather(undefined);
  }, []);

  const getWeather = event => {
    if (event !== undefined) {
      event.preventDefault();
    }
    let city = reduxState.inputCity;
    const API = "08388c6e81f8cd461b38ce8d8b5c4815";
    let comma;
    reduxState.inputCountry === "" ? (comma = "") : (comma = ",");
    let today = new Date();
    let todayDay = today.getDate();
    let nowYear = today.getFullYear();
    let nowMounth = today.getMonth();

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}${comma}${reduxState.inputCountry}&appid=${API}&units=metric`
    )
      .then(i => i.json())
      .then(weatherNow => {
        console.log(weatherNow);
        let allDays = [];

        for (let i = 0; i < 5; i++) {
          let nextDay = new Date(nowYear, nowMounth, todayDay + i);
          let weatherDay = getThisDayWeather(
            weatherNow.list,
            nextDay.getDate()
          );

          let changeWeatherDay = weatherDay.map(it => {
            return {
              ...it,
              thisDay: `${nextDay.getDate()}`
            };
          });
          allDays.push(changeWeatherDay);
        }
        let allWeather = {
          ...weatherNow,
          allDays: allDays
        };
        props.dispatch(get_Weather_From_Server(allWeather));
      });
  };

  return <WeatherDisplayComponent reduxState={props.reduxState} />;
}
const getThisDayWeather = (weatherArr, x) => {
  console.log(weatherArr);
  let thisDay = weatherArr.filter((it, i) => {
    let date = new Date(it.dt_txt);
    let day = date.getDate();
    return day === x ? true : false;
  });
  return thisDay;
};

function mapStateToProps(state) {
  return {
    reduxState: state
  };
}
export default connect(
  mapStateToProps,
  null
)(WeatherDisplayContainer);
