// higher order component is help us to share common functionalities between components.
// syntax: const newComponent = higherOrderComponent(originalComponent);
import React, { Component } from "react";

const HigherOrderComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState(
        (prevstate) => {
          return { count: prevstate.count + 1 };
        },
        () => {
          console.log("call back value", this.state.count);
        }
      );
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default HigherOrderComponent;
