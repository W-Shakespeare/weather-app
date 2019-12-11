import { WEATHER_FROM_SERVER } from "../types/types";

const initiation = {
  weather: []
};

function addresult(state = initiation, action) {
  switch (action.type) {
    case WEATHER_FROM_SERVER:
      return {
        ...state,
        weather: action.payload
      };
    default:
      return state;
  }
}
export default addresult;
