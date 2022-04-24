import React, { Component } from "react";

export default class ComponentUnmount extends Component {
  componentWillUnmount() {
    console.log("Component Will Unmount Function");
  }
  render() {
    return (
      <div>
        <h1>I am H1 from CWU</h1>
      </div>
    );
  }
}
