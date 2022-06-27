import React from "react";
import { render } from "react-dom";

export default class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
    this.tick = this.tick.bind(this);
    this.intervalId = null;
  }

  componentDidMount () {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick(){
    this.setState({date: new Date()});
  }

  render() {
    const { date } = this.state;

    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    // hours = (hours < 10) ? `0${hours}` : hours;
    // minutes = (minutes < 10) ? `0${minutes}` : minutes;
    // seconds = (seconds < 10) ? `0${seconds}` : seconds;
    let time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    let utc = date.toUTCString();
    let stringDate = utc.split(' ').slice(0, 4).join(' ')
    let currentZone = utc.slice(utc.length - 3)

    return (
    <div className="clock span-6-center">
      <h1 className="clock-title">Clock</h1>
      <div className="container grid-2-col">
        <h3>Date</h3>
        <h4>{stringDate}</h4>
        <h3 className="time">Time</h3>
          <span className="time-digits">
            {time} 
            {/* {hours}
            <span className="light"> : </span>{minutes}
            <span className="light"> : </span>{seconds} 
            <span className="light"> {currentZone}</span> */}
          {/* {currentZone} */}
        </span>
      </div>
    </div>
    )}
}