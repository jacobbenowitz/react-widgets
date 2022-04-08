import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";

document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById("root");
    const App = (props) => (
        <div className="app">
            < Clock />
        </div>
    );

    ReactDOM.render(<App/>, root);

});