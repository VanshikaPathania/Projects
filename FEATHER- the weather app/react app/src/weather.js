const city = "London"; 
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data)) 
  .catch(error => console.error("Error fetching weather data:", error));
