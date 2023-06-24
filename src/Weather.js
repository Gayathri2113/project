import React from "react";
import './App.css';


export default function Weather() {
    return (
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-6 m-1">
                        <input type="search" placeholder="Enter a city" autoFocus="on" className="form-control"></input>
                    </div>
                    <div className="col-4 m-1">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}