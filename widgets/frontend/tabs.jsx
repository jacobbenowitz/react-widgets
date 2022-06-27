import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
    this.bindHandlers();

  }

  bindHandlers() {
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(index) {
    this.setState({ selectedTab: index });
  }

  render() {
    const currentTab =
      this.props.tabs[this.state.selectedTab];
    return (
      <div className="tabs span-6-center">
        <div className="tabs-container">
          <h1>Tabs</h1>
          <div className="tabs-main">
            <Header
              selectedTab={this.state.selectedTab}
              onTabChosen={this.selectTab}
              tabs={this.props.tabs}>
            </Header>
            <div className="tab-content">
              <article>
                {currentTab.content}
              </article>
            </div>
          </div>
        </div>
      </div>
    )
  }

};