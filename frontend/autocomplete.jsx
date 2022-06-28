import React from "react";
import { AutoDetails, TabsDetails } from "./project_details";

export default class AutoCompelte extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      selected: false,
      inputFocus: false,
    }
  }

  handleInput = e => {
    e.preventDefault()
    this.setState({
      inputVal: e.target.value,
      selected: false
    })
  }

  handleClick = e => {
    e.preventDefault()
    e.stopPropagation()
    const { listContent } = this.props;
    const name = e.currentTarget.childNodes[0].innerText;
    let company, position;
    for (let i = 0; i < listContent.length; i++) {
      if (listContent[i].name === name) {
        company = listContent[i];
        position = i + 1;
      }
    }
    this.setState({
      inputVal: "",
      company: company,
      position: position,
      selected: true,
      inputFocus: false,
    })
  }

  handleFocus = e => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({inputFocus: !this.state.inputFocus})
  }

  matches() {
    const { listContent } = this.props;
    const { inputVal } = this.state;
    let matches = [];

    if (inputVal.length === 0) {
      matches = listContent.map(company => company.name)
    } else {
      listContent.forEach(company => {
        let subStr = company.name.slice(0, inputVal.length);
        if (subStr.toLowerCase() === inputVal.toLowerCase()) {
          matches.push(company.name)
        }
      })
    }

    if (matches.length === 0) matches.push('No companies found');
    
    return matches;
  }

  render() {
    const { type } = this.props;
    const { inputVal, company, position, selected, inputFocus } = this.state;
    let containerStyle, cardStyle, tabHeader, results, suggested, companyShow;

    if (type === 'tab') {
      containerStyle = "autocomplete tab-card w-100";
      cardStyle = "autocomplete-content tab-container grid-3-row";
    } else {
      containerStyle = "autocomplete span-6-center w-100";
      cardStyle = "autocomplete-content container grid-3-row";
      tabHeader = <AutoDetails />
    }

    results = (
      this.matches().map((company, i) =>
        <li key={`item-${i}`}
          className="flex-row list-item"
          onClick={this.handleClick}
        >
          <span className="company-name">{company}</span>
        </li>
      )
    )

    if (inputFocus) {
      suggested = (
        <ul className="list-options flex-col">
          {results}
        </ul>
      )
    }
    if (selected) {
      companyShow = (
        <div className="company-show flex-row space-between gap-0-6">
          <div className="show flex-col gap-0-6 h-100 flex-15">
            <span className="sm-title">Company</span>
            <span>{company.name}</span>
          </div>
          <div className="show flex-col gap-0-6 h-100 flex-1">
            <span className="sm-title">Rank</span>
            <span className="position">#{position}</span>
          </div>
          <div className="show flex-col gap-0-6 h-100 flex-1">
            <span className="sm-title">Revenue</span>
            <span>{company.revenue}</span>
          </div>
        </div>
      )
    }

    return (
      <div className={containerStyle}>
        {tabHeader}
        <div className={cardStyle}>
          <div className="flex-col gap-1 start">
            <h5>Top 20 Tech Companies by Revenue</h5>
            <div className="input flex-col">
              <label htmlFor="inputVal" className="label">
                Search
              </label>
              <div className="search-box flex-row gap-0-6">
                <div className="icon-wrapper search">
                  <i className="fa-solid fa-search fa-sm" />
                </div>
                <input type="text" name="inputVal" 
                  onFocus={this.handleFocus}
                  value={this.state.inputVal}
                  onChange={this.handleInput}
                />
              </div>
              {suggested}
            </div>
            {companyShow}
          </div>

        </div>
      </div>
    )
  }
}