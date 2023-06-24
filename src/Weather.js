import React from "react";
import './App.css';


export default function Weather() {
    let city = "Paris"
    let apikey ="215576bab28022db35e6e64f040e1b56";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;


    return (
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="form-control pe-5"></input>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
            <h1 className="city mb-0">Paris</h1>
            <h6 className="day mb-0">Saturday 21:30</h6>
            <h6 className="report mb-0">Cloudy</h6>
            <div className="row">
                <div className="col-6 d-flex">
                    <img src="https://openweathermap.org/img/wn/10d@2x.png" className="img-fluid me-0"/>
                    <h2 className="temperature">6<span className="units">°C</span></h2>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 45%</li>
                        <li>Humidity: 45%</li>
                        <li>Wind: 1Km/hr</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}