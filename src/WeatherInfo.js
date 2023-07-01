import React from "react";
import './App.css';
import Currentdate from "./Currentdate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props){

    return(
        <div className="info">
            <h1 className="city text-capitalize mb-2">{props.info.city}</h1>
            <Currentdate />
            <h6 className="text-capitalize">{props.info.description}</h6>
            <div className="row mt-2">
                <div className="col-8 d-flex">
                    <WeatherIcon icon={props.info.icon} size={60} report={props.info.description} />
                    <Temperature celTemp={props.info.temperature}/>
                </div>
                <div className="col-4">
                    <ul>
                        <li>Humidity: {props.info.humidity}%</li>
                        <li>Wind: {props.info.wind}Km/hr</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}