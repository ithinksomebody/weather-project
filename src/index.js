let now = new Date();
now.toString();

let currentTime = now.getHour();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

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

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  console.log(cityInput.value);
  let h6 = document.querySelector("#city-facts-title");
  h6.innerHTML = cityInput.value;
  let h2 = document.querySelector("#heading-date");
  h2.innerHTML = cityInput.value;
}
let form = documnet.querySelector("#form-search");
form.addEventListener("submit", searchCity);
