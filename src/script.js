function showCurrentWeather(response) {
  let currentTemp = document.querySelector("#current-temp");
  let temperature = Math.round(response.data.main.temp);
  currentTemp.innerHTML = `${temperature}℃`;

  let tempMax = Math.round(response.data.main.temp_max);
  let tempMin = Math.round(response.data.main.temp_min);
  let maxMin = document.querySelector("#min-max");
  maxMin.innerHTML = `H: ${tempMax}℃ / L: ${tempMin}℃`;

  let place = document.querySelector("#city");
  let placeName = response.data.name;
  place.innerHTML = `${placeName}`;
}

function getCurrentWeather(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "552ad1a3bbfca9b338aae30c33d2fda3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showCurrentWeather);
}

function getCurentLocation(event) {
  event.preventDefault;
  navigator.geolocation.getCurrentPosition(getCurrentWeather);
}

let currentButton = document.querySelector("#current-location");
currentButton.addEventListener("click", getCurentLocation);

function showSearchCityInfo(response) {
  let currentTemp = Math.round(response.data.main.temp);
  let temperature = document.querySelector("#current-temp");
  temperature.innerHTML = `${currentTemp}℃`;
  let tempMax = Math.round(response.data.main.temp_max);
  let tempMin = Math.round(response.data.main.temp_min);
  let maxMin = document.querySelector("#min-max");
  maxMin.innerHTML = `H: ${tempMax}℃ / L: ${tempMin}℃`;
  let searchedCity = response.data.name;
  let city = document.querySelector("#city");
  city.innerHTML = `${searchedCity}`;
}

function searchCity(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#search-input").value;
  let unit = "metric";
  let apiKey = "552ad1a3bbfca9b338aae30c33d2fda3";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${citySearch}&appid=${apiKey}&units=${unit}`;

  axios.get(`${apiUrl}`).then(showSearchCityInfo);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
