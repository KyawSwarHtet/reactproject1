import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello,ItvisionHub",
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick() {
  //   this.setState({ message: "hey,i am the new one" });
  // }
  handleClick = () => {
    this.setState({ message: "hey,i am the new one" });
    console.log(this);
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.handleClick.bind(this)}>
          Click to change message
        </button> */}
        {/* <button onClick={() => this.handleClick()}>
          Click to change message
        </button> */}
        <button onClick={this.handleClick}>Click to change message</button>
      </div>
    );
  }
}

export default EventBinding;
