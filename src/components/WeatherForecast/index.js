import React, { Component } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@material-ui/core/Grid";
// import Card from "@mui/material/Card"
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { styled } from "@mui/material/styles";
import "./style.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class WeatherForecast extends Component {
  componentDidMount() {
    axios({
      method: "GET",
      url:
        "https://api.openweathermap.org/data/2.5/forecast?q=Teton Village&units=imperial&appid=ed9fb803413e55142ef073bf436a5cb4",
    }).then((response) => {
      console.log(response.data);

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const day1Container = document.querySelector("#day1");
      let d = new Date();
      day1Container.innerHTML = days[d.getDay() + 1];

      const day1ImageContainer = document.querySelector("#day1-image");
      const day1Icon =
        "https://openweathermap.org/img/w/" +
        response.data.list[1].weather[0].icon +
        ".png";
      day1ImageContainer.setAttribute("src", day1Icon);

      const day1HighContainer = document.querySelector("#day1-high");
      day1HighContainer.innerHTML =
        Math.round(response.data.list[1].main.temp_max) + "°";

      const day1LowContainer = document.querySelector("#day1-low");
      day1LowContainer.innerHTML =
        Math.round(response.data.list[1].main.temp_min) + "°";





        const day2Container = document.querySelector("#day2");
        day2Container.innerHTML = days[d.getDay() + 2];
  
        const day2ImageContainer = document.querySelector("#day2-image");
        const day2Icon =
          "https://openweathermap.org/img/w/" +
          response.data.list[2].weather[0].icon +
          ".png";
        day2ImageContainer.setAttribute("src", day2Icon);
  
        const day2HighContainer = document.querySelector("#day2-high");
        day2HighContainer.innerHTML =
          Math.round(response.data.list[2].main.temp_max) + "°";
  
        const day2LowContainer = document.querySelector("#day2-low");
        day2LowContainer.innerHTML =
          Math.round(response.data.list[2].main.temp_min) + "°";



          const day3Container = document.querySelector("#day3");
          day3Container.innerHTML = days[d.getDay() + 3];
    
          const day3ImageContainer = document.querySelector("#day3-image");
          const day3Icon =
            "https://openweathermap.org/img/w/" +
            response.data.list[3].weather[0].icon +
            ".png";
          day3ImageContainer.setAttribute("src", day3Icon);
    
          const day3HighContainer = document.querySelector("#day3-high");
          day3HighContainer.innerHTML =
            Math.round(response.data.list[3].main.temp_max) + "°";
    
          const day3LowContainer = document.querySelector("#day3-low");
          day3LowContainer.innerHTML =
            Math.round(response.data.list[3].main.temp_min) + "°";

            const day4Container = document.querySelector("#day4");
            day4Container.innerHTML = days[d.getDay() + 4];
      
            const day4ImageContainer = document.querySelector("#day4-image");
            const day4Icon =
              "https://openweathermap.org/img/w/" +
              response.data.list[4].weather[0].icon +
              ".png";
            day4ImageContainer.setAttribute("src", day4Icon);
      
            const day4HighContainer = document.querySelector("#day4-high");
            day4HighContainer.innerHTML =
              Math.round(response.data.list[4].main.temp_max) + "°";
      
            const day4LowContainer = document.querySelector("#day4-low");
            day4LowContainer.innerHTML =
              Math.round(response.data.list[4].main.temp_min) + "°";

              const day5Container = document.querySelector("#day5");
              day5Container.innerHTML = days[d.getDay() + 5];
        
              const day5ImageContainer = document.querySelector("#day5-image");
              const day5Icon =
                "https://openweathermap.org/img/w/" +
                response.data.list[5].weather[0].icon +
                ".png";
              day5ImageContainer.setAttribute("src", day5Icon);
        
              const day5HighContainer = document.querySelector("#day5-high");
              day5HighContainer.innerHTML =
                Math.round(response.data.list[5].main.temp_max) + "°";
        
              const day5LowContainer = document.querySelector("#day5-low");
              day5LowContainer.innerHTML =
                Math.round(response.data.list[5].main.temp_min) + "°";



                const day6Container = document.querySelector("#day6");
                day6Container.innerHTML = days[d.getDay() + 6];
          
                const day6ImageContainer = document.querySelector("#day6-image");
                const day6Icon =
                  "https://openweathermap.org/img/w/" +
                  response.data.list[6].weather[0].icon +
                  ".png";
                day6ImageContainer.setAttribute("src", day6Icon);
          
                const day6HighContainer = document.querySelector("#day6-high");
                day6HighContainer.innerHTML =
                  Math.round(response.data.list[6].main.temp_max) + "°";
          
                const day6LowContainer = document.querySelector("#day6-low");
                day6LowContainer.innerHTML =
                  Math.round(response.data.list[6].main.temp_min) + "°";
    });
  }

  render() {
    return (
      <div >
        {/* <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        > */}
        {/* <p className="weather-title" id="forecast-title">Forecast</p> */}
          <Grid container id="forecast-container">
            <Grid item md={2} sm={6}>
            <Item>
                <p className= "forecast-style" id="day1"></p>
                <img className="forecast-icon" id="day1-image" src="" alt="Weather"></img>
                <div>
                  <Grid container>
                    <Grid item Name="forecast-grid" xs={6}>
                      <p className= "forecast-style" id="day1-high"></p>
                    </Grid>
                    <Grid item xs={6}>
                      <p className= "forecast-style" id="day1-low"></p>
                    </Grid>
                  </Grid>
                </div>
                </Item>
            </Grid>
            <Grid item md={2} sm={6}>
              <Item>
                <p className= "forecast-style" id="day2"></p>
                <img id="day2-image" src="" alt="Weather"></img>
                <div>
                  <Grid container>
                    <Grid item xs={6}>
                      <p className= "forecast-style" id="day2-high"></p>
                    </Grid>
                    <Grid item xs={6}>
                      <p className= "forecast-style" id="day2-low"></p>
                    </Grid>
                  </Grid>
                </div>
              </Item>
            </Grid>
            <Grid item md={2} sm={6}>
              <Item>
                <p className= "forecast-style" id="day3"></p>
                <img id="day3-image" src="" alt="Weather"></img>
                <div>
                  <Grid container>
                    <Grid item xs={6}>
                      <p className= "forecast-style" id="day3-high"></p>
                    </Grid>
                    <Grid item xs={6}>
                      <p className= "forecast-style" id="day3-low"></p>
                    </Grid>
                  </Grid>
                </div>
              </Item>
            </Grid>
            <Grid item md={2} sm={6}>
              <Item>
                <p className= "forecast-style" id="day4">Day</p>
                <img id="day4-image" src="" alt="Weather"></img>
                <div>
                  <Grid container>
                    <Grid item xs={6}>
                      <p className= "forecast-style" id="day4-high">High</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p className= "forecast-style" id="day4-low">Low</p>
                    </Grid>
                  </Grid>
                </div>
              </Item>
            </Grid>
            <Grid item md={2} sm={6}>
              <Item>
                <p className= "forecast-style" id="day5">Day</p>
                <img id="day5-image" src="" alt="Weather"></img>
                <div>
                  <Grid container>
                    <Grid item xs={6}>
                      <p className= "forecast-style" id="day5-high">High</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p className= "forecast-style" id="day5-low">Low</p>
                    </Grid>
                  </Grid>
                </div>
              </Item>
            </Grid>
            <Grid item md={2} sm={6}>
              <Item>
                <p className= "forecast-style" id="day6">Day</p>
                <img id="day6-image" src="" alt="Weather"></img>
                <div>
                  <Grid container>
                    <Grid item xs={6}>
                      <p className= "forecast-style" id="day6-high">High</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p className= "forecast-style" id="day6-low">Low</p>
                    </Grid>
                  </Grid>
                </div>
              </Item>
            </Grid>
            
          </Grid>
        {/* </Stack> */}
      </div>
    );
  }
}

export default WeatherForecast;
