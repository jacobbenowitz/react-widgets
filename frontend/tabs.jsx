import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import { TabsDetails } from "./project_details";

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
    const { type } = this.props;
    const currentTab =
      this.props.tabs[this.state.selectedTab];
    let cardHeader;

    if (type === 'widgets') {
      cardHeader = <h1 className="title">All Widgets</h1>
    } else {
      cardHeader = <TabsDetails />
    }
    
    return (
      <div className="tabs span-6-center">
        <div className="tabs-container">
          {cardHeader}
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