import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Tabs from "./tabs";
import Weather from "./weather"

document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById("root");
    const tabs = [
        { title: "Weather", content: <Weather type='tab'/> },
        { title: "Clock", content: <Clock type='tab'/> },
    ]
    const App = () => (
        <div className="app grid-12-col">
            <Tabs tabs={tabs} />
            <Weather />
            <Clock />
        </div>
    );

    ReactDOM.render(<App/>, root);

});