import React from "react";
import { change_input_city } from "./duck/actions/actions";
import { connect } from "react-redux";
function FormWeather({ inputCityValue, dispatch }) {
  return (
    <form>
      <div className="form-div">
        <input
          className="form-control"
          value={inputCityValue}
          onChange={e => {
            e.preventDefault();
            dispatch(change_input_city(e.target.value));
          }}
          type="text"
          name="city"
          placeholder="Введите город"
        ></input>
      </div>
    </form>
  );
}
export default connect(
  null,
  null
)(FormWeather);
