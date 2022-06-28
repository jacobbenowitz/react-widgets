import React from "react";
import { render } from "react-dom";
import { ClockDetails } from "./project_details";

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
    const { type } = this.props;

    let hours = date.toLocaleString('en-US', { hour: 'numeric', hour12: true })
    
    let hoursNums = hours.length > 4 ? hours.slice(0, 2) : hours.slice(0, 1);
    hoursNums = (hoursNums < 10) ? `${hoursNums}` : hoursNums;

    let amPm = hours.slice(hours.length - 2)

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

    let containerStyle, cardStyle, tabHeader;
    if (type === 'tab') {
      containerStyle = "tab-card w-100";
      cardStyle = "time tab-container grid-auto-1ft-row gap-2"
    } else {
      containerStyle = "span-6-center"
      cardStyle = "time container grid-auto-1ft-row gap-2"
      tabHeader = <ClockDetails />
    }

    return (
    <div className={containerStyle}>
      {tabHeader}
        <div className={cardStyle}>
          <div className="space-between flex-row">
            <span className="day">{weekday}</span>
            <div className="flex-row end">
              <div className="date flex-row gap-0-6">
                {month} <span className="date-box">{day}</span>
              </div>
            </div>
          </div>
          <div className="flex-row space-between baseline">
            <div className="flex-row gap-0-3 digits">
              <span className="time-digits">{hoursNums}</span>
              <span className="light">:</span>
              <span className="time-digits">{minutes}</span>
              <span className="light seconds">:</span>
              <span className="time-digits seconds">{seconds}</span>
              <div className="spacer" data-width="15"></div>
            </div>
            <span className="digits-sm ampm">{amPm}</span>
          </div>
      </div>
    </div>
    )}
}