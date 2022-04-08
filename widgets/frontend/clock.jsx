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

  tick(){
    this.setState({date: new Date()});
  }

  componentDidMount () {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.intervalId);
  }

  render(){
    const time = this.state.date.toLocaleTimeString();
    const date = this.state.date.toLocaleDateString();
    const utc = this.state.date.toUTCString();
    const zone = utc.slice(utc.length - 3, utc.length);
    return (
    <>
      <h1 className="clock-title">Clock</h1>
      <div className="clock-container">
        <h3>Date</h3>
        <h3>{date}</h3>
        <div></div>
        <h3 className="time">Time</h3>
        <h3 className="time">{time} {zone}</h3>
      </div>
    </>
    )}
}