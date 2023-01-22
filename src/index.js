function cityInput(event) {
  let currentDate = document.querySelector("#current-date");

  let now = new Date();
  let date = now.getDate();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];

  let day = days[now.getDay()];
  let li = document.querySelector("#hourly-time");
  currentDate.innerHTML = `${day} , ${month} ${date}`;
  li.innerHTML = `Last updated: ${hours}:${minutes}`;

  if (cityInput.value) {
    h1.innerHTML = ` ${cityInput.value}`;
  } else {
    // alert("Please type something");
  }
}

function showTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let h1 = document.querySelector("#city");
  let h2 = document.querySelector("#city");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let icon = document.querySelector("#weather-icon");
  let description = document.querySelector("#description");

  celciusTemperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  description.innerHTML = response.data.condition.description;
  h1.innerHTML = response.data.city;
  h2.innerHTML = response.data.city;
  humidity.innerHTML = Math.round(response.data.temperature.humidity);
  wind.innerHTML = Math.round(response.data.wind.speed);
  icon.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  icon.setAttribute("alt", response.data.condition.description);
  getForecast(response.data.coordinates);
  console.log(response);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function forecastWeek(response) {
  let forecast = response.data.daily;
  let weeksForecast = document.querySelector("#forecast-week");
  let forecastHTML = `<div class = "row"> `;

  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `  <div class="col-2">
              <div class="week-day">
                ${formatDay(forecastDay.time)}</div>
                <br />
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
                    forecastDay.condition.icon
                  }.png"
                  alt=""
                  width="60"
                />
                <p id="current-temp-week"> ${Math.round(
                  forecastDay.temperature.maximum
                )}
              °F | <span id="">  ${Math.round(
                forecastDay.temperature.minimum
              )}°C </span></p>
              </div>`;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  weeksForecast.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "cfa3a2d0o458b3826e41bdfa21t5f2e8";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(forecastWeek);
}
function search(city) {
  let apiKey = "cfa3a2d0o458b3826e41bdfa21t5f2e8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemperature = (celciusTemperature * 9) / 5 + 32;

  celcius.classList.remove("active");
  fahrenheit.classList.add("active");

  let currentTemperatue = document.querySelector("#current-temperature");
  currentTemperatue.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelciusTemp(event) {
  event.preventDefault();
  celcius.classList.add("active");
  fahrenheit.classList.remove("active");

  let currentTemperatue = document.querySelector("#current-temperature");
  currentTemperatue.innerHTML = Math.round(celciusTemperature);
}

cityInput();

let celciusTemperature = null;

let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", displayCelciusTemp);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", displayFahrenheitTemp);
