import React from "react";
import "./App.css"
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props){

    function day() {
        let date = new Date(props.forecast.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    return (
        <div>
            <div className="forecastDay">{day()}</div>
            <WeatherIcon icon={props.forecast.weather[0].icon} size={30} />
            <div className="temperature">
                <span className="max-temperature">{Math.round(props.forecast.temp.max)}°</span>
                <span className="min-temperature"> {Math.round(props.forecast.temp.min)}°</span>
            </div>
        </div>
    )
}