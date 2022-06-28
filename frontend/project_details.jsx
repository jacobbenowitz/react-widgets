import React from "react";

export const ProjectDetails = () => (
  <>
    <div className="spacer" data-height="15" />
    <span className="title">Quick Links to All Widgets:</span>
    <div className="links-wrapper flex-col wrap w-100 left">
      <a className="widget-link" href="#widget-all">All Widgets</a>
      <a className="widget-link" href="#widget-auto">AutoComplete Widget</a>
      <a className="widget-link" href="#widget-clock">Clock Widget</a>
      <a className="widget-link" href="#widget-weather">Weather Widget</a>
      <a className="widget-link" href="#widget-tabs">Tabs Widget</a>
    </div>
  </>
)

export const ClockDetails = () => (
  <>
    <h1 className="title">Clock</h1>
    <div className="widget-details flex-col w-100">
      <p>
        The <code>Clock</code> component displays the current date and time, updating every second.
      </p>
      <a className="link" href="https://github.com/jacobbenowitz/react-widgets/blob/main/README.md#clock" target="_blank">
        <div className="flex-row gap-0-6 left">
        Read more on GitHub
          <div className="icon-wrapper">
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
      </a>
    </div>
  </>
)

export const WeatherDetails = () => (
  <>
    <h2 className="title">Weather</h2>
    <div className="widget-details flex-col w-100">
      <p>The <code>Weather</code> component provides local weather data in an organized and digestible fashion. Weather data includes:</p>
      <a className="link" href="https://github.com/jacobbenowitz/react-widgets/blob/main/README.md#weather" target="_blank">
        <div className="flex-row gap-0-6 left">
          Read more on GitHub
          <div className="icon-wrapper">
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
      </a>
    </div>
  </>
)

export const AutoDetails = () => (
  <>
    <h2 className="title">AutoComplete</h2>
    <div className="widget-details flex-col w-100">
      <p>The <code>AutoComplete</code> component filters a list of names based on the user&#39;s input. Matches are detected by comparing the user&#39;s input to the list of names, each sliced to the length of input and checked for equality. When a user clicks on the recommended name, the field autocompletes the name and displays the company&#39;s data below the search bar.</p>
      <a className="link" href="https://github.com/jacobbenowitz/react-widgets/blob/main/README.md#tabs" target="_blank">
        <div className="flex-row gap-0-6 left">
          Read more on GitHub
          <div className="icon-wrapper">
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
      </a>
    </div>
  </>
)

export const TabsDetails = () => (
  <>
    <h2 className="title">Tabs</h2>
    <div className="widget-details flex-col w-100">
      <p>The <code>Tabs</code> widget is an interactive container that dynamically displays content based on the label selected by the user.</p>
      <a className="link" href="https://github.com/jacobbenowitz/react-widgets/blob/main/README.md#tabs" target="_blank">
        <div className="flex-row gap-0-6 left">
          Read more on GitHub
          <div className="icon-wrapper">
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
      </a>
    </div>
  </>
)