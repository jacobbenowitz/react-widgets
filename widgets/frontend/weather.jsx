import React from "react";
import { ArrowUp } from '../images/SVG/arrow-up-web.js';
import { ArrowUpBlue } from "../images/SVG/arrow-up-blue.js";
import { getDirection } from "./util/direction.js";

const API_KEY = "3f39afb556eab7158c93d32828c6ecc4";

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
    this.setState({
      status: BUSY
    }, () => {
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
      actualTemp: Math.round(main.temp).toString(),
      feelsLike: Math.round(main.feels_like).toString(),
      minTemp: Math.round(main.temp_min).toString(),
      maxTemp: Math.round(main.temp_max).toString(),
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
    const { type } = this.props;
    let weatherData, containerStyle, cardStyle, tabHeader;
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
                <i className="fa-solid fa-map-pin" />
              </div>
              <span>
                {name}
              </span>
            </div>
          </div>

          <div className="weather-container grid-2-col col-gap-2 w-100">
            <div className="title-col flex-col left grid-col-1 grid-row-1">
              <span className="sm-title">
                feels like
              </span>
            </div>
            <div className="flex-col left grid-col-1 grid-row-2">
              <span className="big-temp">{feelsLike}&#176;</span>
            </div>
            <div className="flex-col left grid-col-2 grid-row-1">
              <span className="sm-title">
                today
              </span>
            </div>
            <div className="flex-row grid-col-2 grid-row-2 gap-2">
              <div className="flex-col labels">
                <span>actual</span>
                <span>max</span>
                <span>min</span>
              </div>
              <div className="flex-col">
                <strong>{actualTemp}<span className="sm-labels">&#176;F</span></strong>
                <strong>{maxTemp}<span className="sm-labels">&#176;F</span></strong>
                <strong>{minTemp}<span className="sm-labels">&#176;F</span></strong>
              </div>
            </div>
          </div>

          <div className="wind weather-container grid-2-col col-gap-2 grid-row-3 w-100">
            <div className="title-col flex-col left grid-col-1 grid-row-1">
              <div className="wind sm-title">
                <span>wind</span>
              </div>
            </div>
            <div className="wind-wrapper flex-row grid-col-1 grid-row-2 left gap-1">
              <div className="arrow" style={{ transform: `rotate(${wind.deg}deg)` }}>
                {ArrowUpBlue}
              </div>
            </div>
            <div className="title-col flex-col left grid-col-2 grid-row-1">
              <span className="sm-title">
                details
              </span>
            </div>
            <div className="detail-stats flex-row grid-col-2 grid-row-2 gap-1">
              <div className="flex-col labels line-height-1-3">
                <span>direction</span>
                <span>speed</span>
                {wind.gust ? (
                  <span>gust</span>
                ) : null}
              </div>
              <div className="flex-col line-height-1-3">
                <strong>{getDirection(wind.deg).toString()}</strong>
                <span><strong>{Math.round(wind.speed).toString()}</strong>
                  <span className="sm-labels">mph</span></span>
                {wind.gust ? (
                  <span><strong>{Math.round(wind.gust).toString()}</strong>
                    <span className="sm-labels">mph</span></span>
                ) : null}
              </div>
            </div>
          </div>
        </>
      )
    } else if (status === BUSY) {
      weatherData = (
        <span className="center pad-2">
          Communicating with nearby satilites, one moment please 🛰
        </span>
      )
    } else if (status === IDLE) {
      weatherData = (
        <span className="center pad-2">
          Please enable weather services to get your local weather report 🙏
        </span>
      )
    }

    if (type === 'tab') {
      containerStyle = "weather tab-card w-100";
      cardStyle = "weather-content tab-container grid-3-row";
    } else {
      containerStyle = "weather span-6-center w-100";
      cardStyle = "weather-content container grid-3-row";
      tabHeader = <h1 className="title">Weather</h1>
    }

    return (
      <div className={containerStyle}>
        {tabHeader}
        <div className={cardStyle}>
          {weatherData}
        </div>
      </div>
    )
  }
}