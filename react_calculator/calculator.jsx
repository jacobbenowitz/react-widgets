import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };
    this.bindHandlers();
  }

  bindHandlers() {
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.divideNums = this.divideNums.bind(this);
    this.multiplyNums = this.multiplyNums.bind(this);
    this.addNums = this.addNums.bind(this);
    this.subtractNums = this.subtractNums.bind(this);
  }

  setNum1 (e) {
    e.preventDefault();
    const num1 = parseInt(e.target.value);
    this.setState({num1: num1});
  }

  setNum2 (e) {
    e.preventDefault();
    const num2 = parseInt(e.target.value);
    this.setState({num2: num2});
  }

  divideNums(e) {
    e.preventDefault();
    if (this.state.num1 && this.state.num2) {
      const result = this.state.num1 / this.state.num2;
      this.setState({ result: result });
    }
  }

  multiplyNums(e) {
    e.preventDefault();
    if (this.state.num1 && this.state.num2) {
      const result = this.state.num1 * this.state.num2;
      this.setState({ result: result });
    }
  }

  subtractNums(e) {
    e.preventDefault();
    if (this.state.num1 && this.state.num2) {
      const result = num1 - num2;
      this.setState({ result: result });
    }
  }

  addNums(e) {
    e.preventDefault();
    if (this.state.num1 && this.state.num2) {
      const result = num1 + num2;
      this.setState({ result: result });
    }
  }

  render(){
    return (
      <div>
        <h1>Result: {this.state.result} </h1>
        <input 
          type="text" 
          name="calculator[num1]" 
          value={this.state.num1}
          onChange={this.setNum1}
        />
        <input 
          type="text" 
          name="calculator[num2]" 
          value={this.state.num2} 
          onChange={this.setNum2}
        />
        <button onClick={this.divideNums}>/</button>
        <button onClick={this.multiplyNums}>*</button>
        <button onClick={this.addNums}>+</button>
        <button onClick={this.subtractNums}>-</button>
      </div>
    );
  }
}

export default Calculator;
