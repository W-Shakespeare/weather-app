import React, { useEffect, useState } from "react";
import WeatherDisplayComponent from "./weatherDisplayComponent";
import { get_Weather_From_Server } from "./duck/actions/actions";
import { connect } from "react-redux";
function WeatherDisplayContainer(props) {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    getWeather(undefined);
  }, []);

  const getWeather = event => {
    let city = "Odessa";
    const API = "08388c6e81f8cd461b38ce8d8b5c4815";
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},ua&appid=${API}&units=metric`
    )
      .then(i => i.json())
      .then(weatherNow => {
        setWeather({ ...weatherNow });
        console.log(weatherNow);
        props.dispatch(get_Weather_From_Server(weatherNow));
      });
  };

  return <WeatherDisplayComponent reduxState={props.reduxState} />;
}
function mapStateToProps(state) {
  return {
    reduxState: state
  };
}
export default connect(
  mapStateToProps,
  null
)(WeatherDisplayContainer);
