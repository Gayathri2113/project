import React from "react";
import './App.css';

export default function CurrentDate(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    return (
        <h6 className="day mb-3">{days[day]} {hours}:{minutes}</h6>
    )
}