import React from "react";
import Currentdate from "./Currentdate";

export default function WeatherInfo(props){
    return(
        <div>
            <h1 className="city text-capitalize mb-0">{props.info.city}</h1>
            <Currentdate />
            <h6 className="text-capitalize mb-0">{props.info.description}</h6>
            <div className="row">
                <div className="col-6 d-flex">
                    <img src={props.info.icon} alt={props.info.description} className="img-fluid me-0" />
                    <h2 className="temperature">{props.info.temperature}<span className="units">°C</span></h2>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.info.humidity}%</li>
                        <li>Wind: {props.info.wind}Km/hr</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}