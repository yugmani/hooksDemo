import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <h4>You clicked {this.state.count} times</h4>
        <button onClick={this.incrementCount}>Click here</button>
      </div>
    );
  }
}

export default ClassCounter;
