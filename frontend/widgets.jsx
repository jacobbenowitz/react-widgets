import React from "react";
import ReactDOM from "react-dom";
import AutoCompelte from "./autocomplete";
import Clock from "./clock";
import {ProjectDetails} from "./project_details";
import Tabs from "./tabs";
import Weather from "./weather";

document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById("root");


    const App = () => {

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
            { title: "Weather", content: <Weather type='tab' /> },
            { title: "Clock", content: <Clock type='tab' /> },
            { title: "Autocomplete", content:
                <AutoCompelte
                listContent={listContent}
                type='tab' />
            },
        ]
        const demoTabs = [
            { title: "Tab #1", content: <div className="demo-tab flex-col center"><span>Tab #1</span></div> },
            { title: "Tab #2", content: <div className="demo-tab flex-col center"><span>Tab #2</span></div> },
            { title: "Tab #3", content: <div className="demo-tab flex-col center"><span>Tab #3</span></div> },
        ]

        return (
            <>
                <a href="#top" className="top-link">
                    <div className="icon-wrapper">
                        <i className="fa-solid fa-arrow-up" />
                    </div>
                </a>
                <div className="app grid-12-col">
                    <section id="top" />
                    <div className="span-6-center flex-col">
                        <div className="flex-col left w-100">
                            <h1>React Widgets</h1>
                            <ProjectDetails />
                        </div>
                    </div>
                    
                    <section id="widget-all" className="span-6-center-sm" />
                    <Tabs type="widgets" tabs={tabs} />
                    <div className="span-6-center-sm spacer"
                        data-height="3rem" 
                    />

                    <section id="widget-auto" className="span-6-center-sm" />
                    <AutoCompelte listContent={listContent} />
                    <div className="span-6-center-sm spacer"
                        data-height="3rem" 
                    />

                    <section id="widget-clock" className="span-6-center-sm" />
                    <Clock />
                    <div className="span-6-center-sm spacer"
                        data-height="3rem" 
                    />

                    <section id="widget-weather" className="span-6-center-sm" />
                    <Weather />
                    <div className="span-6-center-sm spacer"
                        data-height="3rem" 
                    />
                    <section id="widget-tabs" className="span-6-center-sm" />
                    <Tabs tabs={demoTabs} />
                    <div className="span-6-center-sm spacer"
                        data-height="3rem" 
                    />
                    <footer className="span-8">
                        <div className="spacer ft-divider" data-height="3rem" />
                        <div className="ft-content flex-row gap-1 space-between">
                            <span>React.js
                                <strong> Widgets </strong>by Jacob Benowitz
                            </span>
                            <ul className="footer-links flex-row gap-2">
                                <a href="https://github.com/jacobbenowitz" className="link">
                                    <li className="link flex-row gap-0-3">
                                        <i className="fa-brands fa-github"></i>
                                        GitHub
                                    </li>
                                </a>
                                <a className="link" href="https://www.linkedin.com/in/jacobbenowitz">
                                    <li className="link flex-row gap-0-3">
                                        <i className="fa-brands fa-linkedin"></i>
                                        LinkedIn
                                    </li>
                                </a>
                                <a className="link" href="https://www.jacobbenowitz.com/">
                                    <li className="link flex-row gap-0-3">
                                        <i className="fa-solid fa-globe"></i>
                                        Portfolio
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </footer>
                </div>
            </>
        )
    };

    ReactDOM.render(<App />, root);

});