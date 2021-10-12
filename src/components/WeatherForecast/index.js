import React, { Component } from "react";
import Paper from '@mui/material/Paper';
// import Grid from "@material-ui/core/Grid";
// import Card from "@mui/material/Card"
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import axios from "axios";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

class WeatherForecast extends Component {
    componentDidMount() {
            axios({
      method: "GET",
      url:
      "https://api.openweathermap.org/data/2.5/forecast?q=Teton Village&units=imperial&appid=ed9fb803413e55142ef073bf436a5cb4",
    })
      .then((response) => {
        
        console.log(response.data);




    
      })
    }

    render() {
        return (
            <div>
                   <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
            </div>
        )
    }
}

export default WeatherForecast;
