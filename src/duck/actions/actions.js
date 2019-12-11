import { WEATHER_FROM_SERVER } from "../types/types";

function get_Weather_From_Server(obj) {
  return {
    type: WEATHER_FROM_SERVER,
    payload: obj
  };
}

export { get_Weather_From_Server };
