import React from "react";
import {
  change_input_city,
  change_input_country
} from "./duck/actions/actions";
import { connect } from "react-redux";
function FormWeather({
  inputCityValue,
  inputCountryValue,
  dispatch,
  getWeather
}) {
  return (
    <form onSubmit={getWeather}>
      <div className="form-div">
        <input
          className="form-control"
          value={inputCityValue}
          onChange={e => {
            e.preventDefault();
            dispatch(change_input_city(e.target.value));
            dispatch(change_input_country(""));
          }}
          type="text"
          name="city"
          placeholder="Введите город"
          required={inputCityValue === "" ? true : false}
        ></input>
        <input
          className="form-control"
          value={inputCountryValue}
          onChange={e => {
            e.preventDefault();
            dispatch(change_input_country(e.target.value));
          }}
          type="text"
          name="country"
          placeholder="Введите страну"
        ></input>
        <button className="btn btn-light">Получить город</button>
      </div>
    </form>
  );
}
export default connect(
  null,
  null
)(FormWeather);
