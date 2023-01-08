let api = "cfa3a2d0o458b3826e41bdfa21t5f2e8";
function searchCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city-input");
  console.log(city.value);
  let h2 = document.querySelector("#city-facts");
  h2.innerHTML = cityInput.value;
  let heading = document.querySelector("#current-date");
  heading.innerHTML = cityInput.value;
}
let form = documnet.querySelector("#search-bar");
form.addEventListener("submit", searchCity);

let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Boston&key=cfa3a2d0o458b3826e41bdfa21t5f2e8&units=metric";

function showTemperature(response) {
  console.log(response.data);
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("current-forecast").innerHTML = Math.round(
    response.data.temperature.current
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.temperature.humidity
  );
}

axios.get(apiUrl).then(showTemperature);

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let now = new Date();
  now.toString();

  let currentTime = now.getHour();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
  return `${day} ${hours}:${minutes}`;
}

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
let month = months[now.getDate()];
