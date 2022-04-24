import React, { Component } from "react";
import Child from "./child.components";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Parent",
    };
  }

  greeting = (childName) => {
    alert(`Hello , ${this.state.name} greeting from ${childName}`);
  };

  render() {
    return (
      <div>
        <Child handleGreet={this.greeting}></Child>
      </div>
    );
  }
}

export default Parent;
