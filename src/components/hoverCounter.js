import React, { Component } from "react";
import HigherOrderComponent from "./higherOrderComponent";

export class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1>Count {count} </h1>
        <button onMouseOver={incrementCount}>Increment Count</button>
      </div>
    );
  }
}
// export default HoverCounter;
export default HigherOrderComponent(HoverCounter);
