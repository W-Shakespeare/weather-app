import React from "react";
import ReactDOM from "react-dom";
import WeatherDisplayContainer from "./weatherDisplayContainer";
function Wrapper() {
  return (
    <div className="wrapper">
      <WeatherDisplayContainer />
    </div>
  );
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));
