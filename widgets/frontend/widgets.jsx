import React from "react";
import ReactDOM from "react-dom";
import AutoCompelte from "./autocomplete";
import Clock from "./clock";
import Tabs from "./tabs";
import Weather from "./weather"

document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById("root");

    const listContent = [
        { name: "Apple", revenue: "$274.5 B" },
        { name: "Samsung Electronics", revenue: "$200.7 B" },
        { name: "Alphabet", revenue: "$182.52 B" },
        { name: "Foxconn", revenue: "$181.94 B" },
        { name: "Microsoft", revenue: "$143.01 B" },
        { name: "Huawei", revenue: "$129.18 B" },
        { name: "Dell Technologies", revenue: "$92.22 B" },
        { name: "Meta Platforms", revenue: "$85.96 B" },
        { name: "Sony", revenue: "$84.89 B" },
        { name: "Hitachi", revenue: "$82.34 B" },
        { name: "Intel", revenue: "$77.86 B" },
        { name: "IBM", revenue: "$73.62 B" },
        { name: "Tencent", revenue: "$69.86 B" },
        { name: "Panasonic", revenue: "$63.19 B" },
        { name: "HP Inc.", revenue: "$56.63 B" },
        { name: "LG Electronics", revenue: "$53.62 B" },
        { name: "TSMC", revenue: "$51.44 B" },
        { name: "Cisco", revenue: "$49.80 B" },
        { name: "Xiaomi", revenue: "$47.7 B" }
    ]

    const tabs = [
        {
            title: "Weather", content: <Weather type='tab' />
        },
        {
            title: "Clock", content: <Clock type='tab' />
        },
        {
            title: "Autocomplete",
            content: <AutoCompelte
                    listContent={listContent} 
                    type='tab' />
        },
    ]


    const App = () => (
        <div className="app grid-12-col">
            <Tabs tabs={tabs} />
            <Clock />
            <Weather />
            <AutoCompelte listContent={listContent} />
        </div>
    );

    ReactDOM.render(<App/>, root);

});