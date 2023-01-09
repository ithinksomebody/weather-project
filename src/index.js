function cityInput(event) {
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
}

let form = documnet.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function cityInput(event) {
  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${day} ${hours}:${minutes}`;

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
  let month = month[now.getMonths()];

  let day = days[now.getDay()];
  let li = document.querySelector("#current-date");
  li.innerHTML = `${day} , ${hours}:${minutes}`;

  if (cityInput.value) {
    h1.innerHTML = ` ${cityInput.value}`;
  } else {
    //   alert("Please type something");
  }
}

cityInput();
