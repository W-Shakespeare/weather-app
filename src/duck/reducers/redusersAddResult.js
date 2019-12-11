import {
  WEATHER_FROM_SERVER,
  CHANGE_INPUT_CITY,
  CHANGE_INPUT_COUNTRY
} from "../types/types";

const initiation = {
  weather: [],
  inputCity: "Odessa",
  inputCountry: "ua"
};

function addresult(state = initiation, action) {
  switch (action.type) {
    case WEATHER_FROM_SERVER:
      return {
        ...state,
        weather: action.payload
      };
    case CHANGE_INPUT_CITY:
      return {
        ...state,
        inputCity: action.payload
      };
    case CHANGE_INPUT_COUNTRY:
      return {
        ...state,
        inputCountry: action.payload
      };
    default:
      return state;
  }
}
export default addresult;
