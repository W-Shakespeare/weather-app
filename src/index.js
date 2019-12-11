import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import WeatherDisplayContainer from "./weatherDisplayContainer";
function Wrapper() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <WeatherDisplayContainer />
      </Provider>
    </div>
  );
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));
