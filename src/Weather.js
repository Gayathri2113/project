import React, { useState } from "react";
import './App.css';
import axios from "axios";
import WeatherInfo from "./WeatherInfo"

export default function Weather() {
    let [city,setcity] = useState("karimnagar")
    let [load, loaded] = useState(false)
    let [data,setdata] = useState({})


    function showTemperature(response) {
        setdata({
            temperature: Math.round(response.data.main.temp),
            precipitation: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed),
            city: response.data.name,
            description: response.data.weather[0].description,
            icon:response.data.weather[0].icon
        })
        loaded(true)
    }

    function searchCity(){
        let apikey = "215576bab28022db35e6e64f040e1b56";
        let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        axios.get(apiurl).then(showTemperature);
    }

    function handle(event){
        event.preventDefault();
        searchCity();
    }

    function updateCity(event){
        setcity(event.target.value)
    }

    if (load) {
        return (
            <div className="weather">
                <form onSubmit={handle}>
                    <div className="row">
                        <div className="col-8">
                            <input type="search" placeholder="Enter a city" className="form-control pe-5" onChange={updateCity}></input>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
                <WeatherInfo info={data}/>
            </div>
        )
    }
    else{
        searchCity();
        return "It is loading..!"
    }
}