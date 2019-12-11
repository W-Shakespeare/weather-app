import React from "react";

function FormWeather() {
  return (
    <form>
      <div className="form-div">
        <input
          className="form-control"
          type="text"
          name="city"
          placeholder="Введите город"
        ></input>
      </div>
    </form>
  );
}
export default FormWeather;
