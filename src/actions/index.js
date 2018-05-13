import axios from "axios";
const API_KEY = "a87bb68945818eb3431127669953ba0c";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log("Request", request); //this is a promise

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
