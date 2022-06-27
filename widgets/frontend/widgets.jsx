import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Tabs from "./tabs";
import Weather from "./weather"

document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById("root");
    const tabs = [
        { title: "#1 tab", content: "tab number one!" },
        { title: "#2 tab", content: "tab number two!" },
        { title: "#3 tab", content: "tab number three!" }
    ]
    const App = () => (
        <div className="app grid-12-col">
            <Tabs tabs={tabs} />
            <Clock />
            <Weather />
        </div>
    );

    ReactDOM.render(<App/>, root);

});