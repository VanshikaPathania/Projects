import React, { useState } from "react";
import keys from "./keys.js";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function Home() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    return date.slice(3, 15);
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.cod === "404") {
            setError("Location not found!");
            setWeather({});
          } else {
            setWeather(result);
            setError("");
          }
          setQuery("");
        });
    }
  };

  return (
    <div className={weather.main ? (weather.main.temp > 18 ? "App hot" : "App cold") : "App"}>
      <main>
        <header>Feather</header>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search city..."
            className="search-bar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        {weather.main && (
          <div>
            <div className="location-container">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuild(new Date())}</div>
            </div>
            <div className="weather-container">
              <div className="temperature">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
