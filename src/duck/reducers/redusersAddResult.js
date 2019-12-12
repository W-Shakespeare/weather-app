import {
  WEATHER_FROM_SERVER,
  CHANGE_INPUT_CITY,
  CHANGE_INPUT_COUNTRY
} from "../types/types";

const initiation = {
  weather: [],
  allDays: [],
  inputCity: "Odessa",
  inputCountry: "ua",
  cityWeather: undefined,
  country: undefined,
  population: undefined
};

function addresult(state = initiation, action) {
  switch (action.type) {
    case WEATHER_FROM_SERVER:
      return {
        ...state,
        weather: action.payload,
        allDays: action.payload.allDays,
        cityWeather: action.payload.city.name,
        country: action.payload.city.country,
        population: action.payload.city.population
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
