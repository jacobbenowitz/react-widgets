import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./tabs";

export default class Header extends React.Component {

  render() {
    const selected = this.props.selectedTab;
    const headers = this.props.tabs.map((tab, index) => {
      const title = tab.title;
      const status = index === selected ? 'active' : '';

      return (
        <li
          key={index}
          className={status}
          onClick={() => this.props.onTabChosen(index)}>
          {title}{' '}
        </li>
      );
    });
    return (
      <ul className="tab-header">
        {headers}
      </ul>
    );
  }
}