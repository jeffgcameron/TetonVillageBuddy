import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
import axios from "axios";
import "./style.css";
import { Card } from "@material-ui/core";

class CurrentWeather extends Component {
  componentDidMount() {
    axios({
      method: "GET",
      url:
        "http://api.openweathermap.org/data/2.5/weather?q=Teton Village&units=imperial&appid=d00ece2663714b22874f54f1b9fa0413",
    }).then((response) => {
   
      
      // let precipitationContainer = document.querySelector("#precipitation");
      let humidityContainer = document.querySelector("#humidity");
      
      let dateContainer = document.querySelector("#date");
      

      console.log(response.data);

      const tempContainer = document.querySelector("#temp");
      const currentWeather = Math.round(response.data.main.temp) + "°";
      console.log(currentWeather);
      tempContainer.textContent = currentWeather;

      let weatherIconContainer = document.querySelector("#weather-icon");
      const weatherIcon =
        "https://openweathermap.org/img/w/" +
        response.data.weather[0].icon +
        ".png";

        weatherIconContainer.setAttribute("src", weatherIcon)
      
      


      const descriptionContainer = document.querySelector("#description");
      const coverage = response.data.weather[0].description;
      descriptionContainer.textContent = coverage

      const windContainer = document.querySelector("#wind");
      const currentWind = "Wind Speed: " + response.data.wind.speed + " mph";
      windContainer.textContent = currentWind

      const currentHumidity = "Humidity: " + response.data.main.humidity + "%";
      humidityContainer.textContent = currentHumidity

      // setHumidity(currentHumidity)
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      let d = new Date();
      dateContainer.innerHTML = days[d.getDay()] + ", ";
      dateContainer.innerHTML +=  months[d.getMonth()] + " "
      dateContainer.innerHTML += d.getDate() + ", ";
      dateContainer.innerHTML += d.getFullYear();

      let timeContainer = document.querySelector("#time");
      function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        console.log(strTime);
        return strTime;
      }
      
      timeContainer.innerHTML = formatAMPM(new Date());

      
      
      
    })   
    // .then(function() {
     
      
    // });
  }

  render() {
    return (
      
        <div id="current-weather-div">
          <Grid container className = "container" id="current-weather-container">
            <Grid item xs={12}>
            <p className="weather-title">Teton Village Weather</p>
            <p className="weather-style" id="date"></p>
            <p className="weather-style" id="time"></p>
            </Grid>
            <Grid item xs={6}>
            <p id="temp" className="weather-style"></p>
            </Grid>
            <Grid item xs={6}>
            <img id="weather-icon" src="" alt="Weather icon"></img>
            </Grid>
            <Grid item xs={6}>
            <p id="wind" className="weather-style"></p>
            <p id="humidity" className="weather-style"></p>
            </Grid>
            <Grid item xs={6}>
            <p id="description" className="weather-style"></p>
            </Grid>
          </Grid>






















        {/* <h1>Current Weather</h1> */}
        {/* <Grid container>
          <Grid item md={3} sm={6} id="icon">
            <div>
            <img id="weather-icon" src="" alt="Weather icon"></img>
            </div>
            <p id="description" className="weather-style"></p>
          </Grid>
          <Grid item md={3} sm={6}>
            <p id="temp" className="weather-style">
            </p>
          </Grid>
          <Grid item md={3} sm={6} className="right">
            <div id="precipitation" className="weather-style">
              Precipitation
            </div>
            <p id="humidity" className="weather-style"></p>
            <p id="wind" className="weather-style"></p>
          </Grid>
          <Grid item md={3} sm={6}>
            <p className="weather-style" id="date">
            </p>
            <p className="weather-style" id="time">
            </p>
          </Grid>
        </Grid> */}
      </div>
    );
  }
}

export default CurrentWeather;

// if (weatherIcon === "10d" || weatherIcon === "01n") {
//   const currentIcon = "CloudIcon"
//   setIcon(currentIcon);
// } else {
//   console.log("nope");
// }

//         const [temperature, setTemperature] = useState("");
// const [icon, setIcon] = useState("");
// const [description, setDescription] = useState("");
// const [wind, setWind] = useState("");
// const [humidity, setHumidity] = useState("");
