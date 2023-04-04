let Typecity = document.querySelector("#Typecity");
let Searchbtn = document.querySelector("#Searchbtn");
let Cityname = document.querySelector("#cityDisplay");
let CurrentBtn = document.querySelector(".currentbtn");
let currentTime = document.querySelector(".now");
let currentTemp = document.querySelector(".currentTemp");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentday = days[now.getDay()];
let hours = now.getHours();
let min = now.getMinutes();

currentTime.innerHTML = `${currentday} ${hours}:${min}`;

function change(event) {
  event.preventDefault();
  let CityToDisplay = Typecity.value;

  let ApiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
  let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${CityToDisplay}&units=metric&appid=${ApiKey}`;

  function ShowWeather(response) {
    Cityname.innerHTML = response.data.name;
    let temp = Math.round(response.data.main.temp);
    currentTemp.innerHTML = `${temp}°C`;
  }
  axios.get(urlApi).then(ShowWeather);
}

Searchbtn.addEventListener("click", change);

function ShowCurrent() {
  function getLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let ApiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&units=metric&appid=${ApiKey}`;
    function ShowWeather(response) {
      Cityname.innerHTML = response.data.name;
      let temp = Math.round(response.data.main.temp);
      currentTemp.innerHTML = `${temp}°C`;
    }
    axios.get(urlApi).then(ShowWeather);
  }

  navigator.geolocation.getCurrentPosition(getLocation);
}
CurrentBtn.addEventListener("click", ShowCurrent);
