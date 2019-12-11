import { WEATHER_FROM_SERVER, CHANGE_INPUT_CITY } from "../types/types";

function get_Weather_From_Server(obj) {
  return {
    type: WEATHER_FROM_SERVER,
    payload: obj
  };
}
function change_input_city(string) {
  return {
    type: CHANGE_INPUT_CITY,
    payload: string
  };
}

export { get_Weather_From_Server, change_input_city };
