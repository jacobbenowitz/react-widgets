import React from "react";
import { render } from "react-dom";

export default class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      type: 'default'
    };
    this.tick = this.tick.bind(this);
    this.intervalId = null;
  }

  componentDidMount () {
    this.intervalId = setInterval(this.tick, 1000);
    this.setState({type: this.props.type})
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick(){
    this.setState({date: new Date()});
  }

  render() {
    const { date } = this.state;

    let hours = date.toLocaleString('en-US', { hour: 'numeric', hour12: true })
    let hoursNums = hours.slice(0, 1)
    hoursNums = (hoursNums < 10) ? `${hoursNums}` : hoursNums;
    let amPm = hours.slice(1)
    let minutes = date.toLocaleString('en-US', {minute: 'numeric'})
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    let seconds = date.toLocaleString('en-US', {second: 'numeric'})
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    let weekday = date.toLocaleString('en-US', {weekday: "long"})
    let day = date.toLocaleString('en-US', {day: "numeric"})
    let month = date.toLocaleString('en-US', {month: "long"})
    let year = date.toLocaleString('en-US', {year: "numeric"})

    let utc = date.toUTCString();
    let stringDate = utc.split(' ').slice(0, 4).join(' ')
    let currentZone = utc.slice(utc.length - 3)
    let space = <div className="spacer" data-width="digits"></div>

    return (
    <div className="span-6-center">
      <h1 className="title">Clock</h1>
        <div className="time container grid-auto-1ft-row gap-2">
          <div className="space-between flex-row">
            <span className="day">{weekday}</span>
            <div className="flex-row end">
              <span>{month} {day}</span>
            </div>
          </div>
          <div className="flex-row gap-0-3 digits">
            <span className="time-digits">{hoursNums}</span>
            <span className="light">:</span>
            <span className="time-digits">{minutes}</span>
            <span className="light seconds">:</span>
            <span className="time-digits seconds">{seconds}</span>
            <div className="spacer" data-width="15"></div>
            <span className="digits-sm">{amPm}</span>
          </div>
      </div>
    </div>
    )}
}