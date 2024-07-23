import './style.css';

const searchForm = document.getElementById("searchForm");
let searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");


const cityName = document.getElementById("cityName");
const currentTemp = document.getElementById("currentTemp");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchButton.addEventListener("click", async () => {
  let location = searchInput.value;
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=DWKZF322WZAD5DYBEZHTB65TU&contentType=json`, { mode: 'cors' });

  let weatherData = await response.json();

  weatherData = {
    cityName: weatherData.address,
    currentTemp: Math.round(weatherData.currentConditions.temp),
    feelsLike: Math.round(weatherData.currentConditions.feelslike),
    humidity: Math.round(weatherData.currentConditions.humidity),
    wind: Math.round(weatherData.currentConditions.windspeed),
  };
  searchInput.value = "";

  cityName.innerHTML = weatherData.cityName;
  currentTemp.innerHTML = `Current Temp: ${weatherData.currentTemp} ℉`;
  feelsLike.innerHTML = `Feels Like: ${weatherData.feelsLike} ℉`;
  humidity.innerHTML = `Humidity: ${weatherData.humidity} %`;
  wind.innerHTML = `Wind: ${weatherData.wind} km/h`;
});



