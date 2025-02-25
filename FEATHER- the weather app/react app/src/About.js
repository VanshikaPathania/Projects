import React from "react";
import "./index.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Feather 🌤️</h1>
      <p>
        Feather is a sleek, modern weather forecasting application designed to provide 
        real-time weather updates for any location worldwide. Whether you're planning 
        your day or traveling to a new destination, Feather ensures you stay prepared 
        with accurate temperature, conditions, and forecasts.
      </p>

      <h2>🌍 Why Choose Feather?</h2>
      <ul>
        <li>🔹 **Real-time weather updates** for your current and searched locations</li>
        <li>🔹 **User-friendly and responsive UI** for seamless browsing</li>
        <li>🔹 **Supports multiple locations** including preset weather info</li>
        <li>🔹 **Powered by OpenWeather API** for reliable data</li>
      </ul>

      <h2>📡 How It Works</h2>
      <p>
        Feather uses **geolocation** to fetch the latest weather data for your current position. 
        You can also manually search for any city to get instant weather details. 
        The app dynamically updates based on real-time conditions, ensuring you're 
        always informed.
      </p>

      <h2>🚀 Our Vision</h2>
      <p>
        At Feather, we believe in providing a simple yet powerful weather tracking experience. 
        Our goal is to make weather forecasting **accessible, accurate, and easy to use** 
        for everyone.
      </p>

      <footer>
        <p>🌤️ Feather Weather App - Built for clarity, precision, and ease. </p>
      </footer>
    </div>
  );
};

export default About;
