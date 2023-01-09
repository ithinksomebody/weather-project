function cityInput(event) {
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  let currrentDate = document.querySelector("#current-date");

  let now = new Date();
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

  let day = days[now.getDay()];
  let li = document.querySelector("#current-date");
  li.innerHTML = `${day} , ${hours}:${minutes}`;

  if (cityInput.value) {
    h1.innerHTML = ` ${cityInput.value}`;
  } else {
    //   alert("Please type something");
  }
  return `${day} ${hours}:${minutes}`;
}

function showTemperature(response) {
  let temperature = document.querySelector("#current-forecast");
  let h1 = document.querySelector("#city-input");
  let h2 = document.querySelector("#city-facts");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  //let icon = document.querySelector("#weather-icon")

  h1.innerHTML = response.data.city.name;
  h2.innerHTML = response.data.city.name;
  humidity.innerHTML = Math.round(response.data.temperature.humidity);
  wind.innerHTML = Math.round(response.data.temperature.wind);
  //icon.
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiKey = "cfa3a2d0o458b3826e41bdfa21t5f2e8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}

let form = documnet.querySelector("#search-bar");
form.addEventListener("submit", searchCity);

cityInput();
