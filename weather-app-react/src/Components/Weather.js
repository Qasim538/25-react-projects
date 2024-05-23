import React, { useEffect, useState } from "react";
import WeatherSearch from "./WeatherSearch";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=36c9a81c5b3604b6ee464364bb05e6b9`
      );
      const data = await res.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("London");
  }, []);

  console.log(weatherData);

  return (
    <div>
    <h1> Weather </h1>

      <WeatherSearch
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div> {getCurrentDate()} </div>
          <div>
            {" "}
            <h3> {Math.floor(weatherData?.main?.temp)} ℉</h3>
          </div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div>
              <p className="wind">{weatherData?.wind?.speed}</p>
              <p>Wind Speed</p>
            </div>
          </div>
          <div className="weather-info">
            <div>
              <p className="humidity">{weatherData?.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
