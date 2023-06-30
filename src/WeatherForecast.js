import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios"
import DailyForecast from "./DailyForecast";

export default function WeatherForecast(props) {
    let [load, loaded] = useState(false);
    let [forecast,setforecast] = useState(null)

    useEffect(()=>{
        loaded(false);
    }, [props.lat, props.lon]);


    function showForecast(response) {
        loaded(true)
        setforecast(response.data.daily)
    }
    if (load) {
        return (
            <div className="forcast">
                <div className="row">
                    {forecast.map(function(dailyForecast,index){
                        if(index < 6){
                            return (
                                <div className="col" key={index}>
                                    <DailyForecast forecast={dailyForecast} />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    } else {
        let apikey = "215576bab28022db35e6e64f040e1b56";
        let longitude = props.lon;
        let latitude = props.lat;
        let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`;
        axios.get(apiurl).then(showForecast);

        return null;
    }
}