import React, { Component } from "react";

class ClassHookMore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h3>Class with prevState</h3>
        <button onClick={this.incrementCount}>Count: {this.state.count}</button>
      </div>
    );
  }
}

export default ClassHookMore;
