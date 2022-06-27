import React from "react";
import { ArrowUp } from '../images/SVG/arrow-up-web.js';
import { ArrowUpBlue } from "../images/SVG/arrow-up-blue.js";
import { getDirection } from "./util/direction.js";

const API_KEY = "3f39afb556eab7158c93d32828c6ecc4";

// response object example
// { coord: {… }, 
//   weather: Array(1), base: 'stations', main: {… }, visibility: 10000, … }
// base: "stations"
// clouds: { all: 40 }
// cod: 200
// coord: { lon: -73.9605, lat: 40.6501 }
// dt: 1656303225
// id: 5110302
// main: { 
//      temp: 73.87, 
//      feels_like: 74.1, 
//      temp_min: 70.45, 
//      temp_max: 77.88, 
//      pressure: 1016, … }
// name: "Brooklyn"
// sys: { type: 2, id: 2037026, country: 'US', sunrise: 1656322006, sunset: 1656376250 }
// timezone: -14400
// visibility: 10000
// weather: [{
//    description: "scattered clouds"
//    icon: "03n"
//    id: 802
//    main: "Clouds"
//  }]
// wind: { speed: 18.41, deg: 190, gust: 26.46 }
// [[Prototype]]: Object

const IDLE = "IDLE";
const BUSY = "BUSY";
const DONE = "DONE";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualTemp: 0,
      feelsLike: 0,
      minTemp: 0,
      maxTemp: 0,
      name: "",
      weather: {},
      wind: {},
      status: IDLE
    }
    this.handleData = this.handleData.bind(this)
    this.locationFound = this.locationFound.bind(this)
  }

  componentDidMount() {
    this.setState({ status: BUSY }, () => {
      navigator.geolocation.getCurrentPosition(this.locationFound,
        this.locationError)
    })
  }

  locationFound(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // TODO: HIDE API KEY
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`)
      .then(response => response.json())
      .then(data => this.handleData(data))
    // .then(data => console.log(data))
  }

  handleData(data) {
    const { main, weather, wind, name } = data;
    this.setState({
      actualTemp: Math.round(main.temp),
      feelsLike: Math.round(main.feels_like),
      minTemp: main.temp_min,
      maxTemp: main.temp_max,
      name: name,
      weather: weather[0],
      wind: wind,
      status: DONE
    })
  }

  locationError() {
    return "Unable to retrieve your location"
  }

  render() {
    const { actualTemp, feelsLike, minTemp, maxTemp, name,
      wind, weather, status } = this.state;
    let weatherData;
    if (status === DONE) {
      weatherData = (
        <>
          <div className="top-info flex space-between">
            <div className="description flex left gap-0-6">
              <div className="icon">
                <img className="weather-icon" src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} />
              </div>
              <span>{weather.description}</span>
            </div>
            <div className="location flex right gap-0-6">
              <div className="icon">
                <i className="fa-solid fa-map-pin fa-lg" />
              </div>
              <span>
                {name}
              </span>
            </div>
          </div>

          <div className="weather-container grid-auto-1fr-col col-gap-2">
            <div className="title-col flex-col left grid-col-1 grid-row-1">
              <span className="sm-title">
                feels like
              </span>
            </div>
            <div className="flex-col left grid-col-1 grid-row-2 end">
              <span className="big-temp">{feelsLike}&#176;</span>
            </div>
            <div className="flex-col left grid-col-2 grid-row-1">
              <span className="sm-title">
                today
              </span>
            </div>
            <div className="flex-row grid-col-2 grid-row-2 gap-1">
              <div className="flex-col labels">
                <span>actual</span>
                <span>max</span>
                <span>min</span>
              </div>
              <div className="flex-col">
                <span>{actualTemp}&#176;</span>
                <span>{maxTemp}&#176;</span>
                <span>{minTemp}&#176;</span>
              </div>
            </div>
          </div>

          <div className="weather-container grid-auto-1fr-col col-gap-2 end">
            <div className="title-col flex-col left grid-col-1 grid-row-1">
              <span className="sm-title">
                wind
              </span>
            </div>
            <div className="wind-wrapper flex-row grid-col-1 grid-row-2 left gap-1">
              <div className="arrow" style={{ transform: `rotate(${wind.deg}deg)` }}>
                {ArrowUpBlue}
              </div>
            </div>
            <div className="flex-col left grid-col-2 grid-row-1">
              <span className="sm-title">
                today
              </span>
            </div>
            <div className="flex-row grid-col-2 grid-row-2 gap-1">
              <div className="flex-col labels">
                <span>direction</span>
                <span>speed</span>
                <span>gust</span>
                <span>direction</span>
              </div>
              <div className="flex-col">
                <span>{getDirection(wind.deg)}</span>
                <span>{Math.round(wind.speed)} mph</span>
                <span>{Math.round(wind.gust)} mph.</span>
                <span>{wind.deg}</span>
              </div>
            </div>
          </div>
        </>
      )
    } else if (status === BUSY) {
      weatherData = (
        <span className="span-2-col span-2-row">
          Communicating with nearby satilites, one moment please 🛰
        </span>
      )
    } else if (status === IDLE) {
      weatherData = (
        <span className="span-2-col span-2-row">
          Please enable weather services to get your local weather report 🙏
        </span>
      )
    }
    return (
      <div className="weather span-6-center">
        <h1>Weather</h1>
        <div className="container grid-2-col col-gap-4">
          {weatherData}
        </div>
      </div>
    )
  }
}