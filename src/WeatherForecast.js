import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import './App.css';
import axios from "axios"

export default function WeatherForecast(props) {
    let [load, loaded] = useState(false);
    let [forecast,setforecast] = useState(null)

    function day(){
        let date = new Date(forecast[0].dt * 1000);
        let day = date.getDay();
        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        return days[day]
    }

    function showForecast(response) {
        console.log(response.data);
        loaded(true)
        setforecast(response.data.daily)
    }
    if (load) {
        return (
            <div className="forcast">
                <div className="row">
                    <div className="col">
                        <div className="forecastDay">{day()}</div>
                        <WeatherIcon icon={forecast[0].weather[0].icon} size={30} />
                        <div className="temperature">
                            <span className="max-temperature">{Math.round(forecast[0].temp.max)}°</span>
                            <span className="min-temperature"> {Math.round(forecast[0].temp.min)}°</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        let apikey = "215576bab28022db35e6e64f040e1b56";
        let longitude = props.lon;
        let latitude = props.lat;
        let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`;
        axios.get(apiurl).then(showForecast);
    }
}