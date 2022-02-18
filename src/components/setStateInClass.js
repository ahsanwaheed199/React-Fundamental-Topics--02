// Do's and dont's
// 1.always make use of setState and never modify the state directly.
// 2.in setState method do not place the code right after the setState method instead
// place the code in the call back function  as a second parameter to setState method.Otherwise code will run synchoronously.
// 3.When you have to update the satate based on the previous  state make sure to pass in a function
//  as an argument instead of the regular object

import React, { Component } from "react";

export class SetStateInClass extends Component {
  constructor(props) {
    super(props); //super() is required because  we extends react componet class and a call has to be made a base class constructor.

    this.state = {
      count: 0,
    };
  }
  incrementCount() {
    this.setState(
      (prevstate) => {
        return { count: prevstate.count + 1 };
      },
      () => {
        console.log("call back value", this.state.count);
      }
    );
  }
  render() {
    return (
      <div>
        <h1>Count {this.state.count} </h1>
        <button onClick={() => this.incrementCount()}>Increment Count</button>
      </div>
    );
  }
}

export default SetStateInClass;
