function showTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let h1 = document.querySelector("#city");
  let h2 = document.querySelector("#city");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");

  temperatureElement.innerHTML = response.data.temperature.current;
  h1.innerHTML = response.data.city;
  h2.innerHTML = response.data.city;
  humidity.innerHTML = Math.round(response.data.temperature.humidity);
  wind.innerHTML = Math.round(response.data.temperature.wind);
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

function cityInput(event) {
  let currentDate = document.querySelector("#current-date");

  let now = new Date();
  let date = now.getdate();
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
  let li = document.querySelector("#current-date");
  currentDate.innerHTML = `${day} ${month} ${date}  ${hours}:${minutes}`;
  li.innerHTML = `${day} , ${month} ${date} ${hours}:${minutes}`;

  if (cityInput.value) {
    h1.innerHTML = ` ${cityInput.value}`;
  } else {
    //   alert("Please type something");
  }
}

cityInput();
