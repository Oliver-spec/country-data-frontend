import { useState, useEffect } from "react";
import api from "../services/api";

export default function Weather({ country }) {
  // variables
  let capital = country.capital;
  if (!country.capital) {
    capital = [country.name.common];
  }

  // states
  const [weather, setWeather] = useState(null);

  // effects
  useEffect(() => {
    api.getWeather(capital[0]).then((response) => {
      setWeather(response);
    });
  }, [capital]);

  if (!weather) {
    return (
      <div>
        <h1>Weather in {capital[0]}</h1>
        {/* <p>Can't find weather in {capital[0]}</p> */}
        <h3>Loading...</h3>
      </div>
    );
  } else {
    return (
      <div>
        <div>Weather in {capital[0]}</div>
        <div>Temperature {weather.main.temp}°C</div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <div>
          {weather.weather[0].description[0].toUpperCase() +
            weather.weather[0].description.substr(1)}
        </div>
        <div>Wind {weather.wind.speed} m/s</div>
      </div>
    );
  }
}
