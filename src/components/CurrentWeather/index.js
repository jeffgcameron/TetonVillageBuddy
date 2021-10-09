import React from "react";
import Grid from "@material-ui/core/Grid";
import "./style.css";

let weatherIcon = document.querySelector("#weather-icon");
let tempContainer = document.querySelector("#temp");
let precipitationContainer = document.querySelector("#precipitation");
let humidityContainer = document.querySelector("#humidity");
let windContainer = document.querySelector("#wind");
let dateContainer = document.querySelector("#date");
let timeContainer = document.querySelector("#time");
let coverageContainer = document.querySelector("#coverage");

const getWeather = function (city) {
  const apiUrl =
    "api.openweathermap.org/data/2.5/weather?q=Teton Village&appid=d00ece2663714b22874f54f1b9fa0413";

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          tempContainer.textContent = "Temperature: " + data.main.temp + "°F";
          humidityContainer.textContent =
            "Humidity: " + data.main.humidity + "%";
          windContainer.textContent = "Wind Speed: " + data.wind.speed + "mph";
          // displayWeather(data, city)
        });
      } else {
        alert("Error" + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to find city");
    });
};

const CurrentWeather = () => (
  <div>
    <Grid container>
      <Grid item md={3} sm={6}>
        <div id="weather-icon">Weather Icon</div>
      </Grid>
      <Grid item md={3} sm={6}>
        <div id="temp"> Temp</div>
      </Grid>
      <Grid item md={3} sm={6} className="right">
        <div id="precipitation"> Precipitation</div>
        <div id="humidity"> humidity</div>
        <div id="wind">Wind</div>
      </Grid>
      <Grid item md={3} sm={6}>
        <div id="date">Date</div>
        <div id="time">Time</div>
        <div id="coverage">Coverage</div>
      </Grid>
    </Grid>
  </div>
);

export default CurrentWeather;
