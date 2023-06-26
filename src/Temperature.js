import React, { useState } from "react";
import './App.css';

export default function Temperature(props) {
    let [unit, setunit] = useState("celsius");

    function convertToFahrenheit(event){
        event.preventDefault();
        setunit("Fahrenheit");
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setunit("celsius");
    }
    if (unit === "celsius") {
        return (
            <div className="temp">
                <h2 className="temperature">{props.celTemp}<span className="units">°C | <a href="/" onClick={convertToFahrenheit}>°F</a></span></h2>
            </div>
        )
    }
    else{
        let fahrenheit = Math.round(((props.celTemp * 9)/5)+32);
        return (
            <div className="temp">
                <h2 className="temperature">{fahrenheit}<span className="units"><a href="/" onClick={convertToCelsius}>°C </a>| °F</span></h2>
            </div>
        )
    }
}