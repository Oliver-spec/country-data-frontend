import axios from "axios";

function getAll() {
  return axios.get("/allCountries").then((response) => response.data);
}

function getWeather(capital) {
  return axios.get(`/weather/${capital}`).then((response) => response.data);
}

function getDialCodes() {
  return axios.get(`/data`).then((response) => response.data);
}

const functions = { getAll, getWeather, getDialCodes };

export default functions;
