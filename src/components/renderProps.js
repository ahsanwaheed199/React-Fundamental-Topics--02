// The term "render props" is refer to a techneque  for sharing code berween react component using
// a prop whose value is function

import React, { Component } from "react";

export class RenderProps extends Component {
  constructor(props) {
    super(props); //super() is required because  we extends react componet class and a call has to be made a base class constructor.

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
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default RenderProps;
