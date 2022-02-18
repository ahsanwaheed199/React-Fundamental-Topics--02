import React, { Component } from "react";
import HigherOrderComponent from "./higherOrderComponent";

export class CounterComponent extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1>Count {count} </h1>
        <button onClick={incrementCount}>Increment Count</button>
      </div>
    );
  }
}

// export default CounterComponent;
export default HigherOrderComponent(CounterComponent);
