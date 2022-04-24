import React, { Component } from "react";
import { render } from "react-dom";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ players: users }));
  }

  render() {
    return (
      <span>
        {this.state.players.map((player) => (
          <h2 key={player.id}>{player.name}</h2>
        ))}
      </span>
    );
  }
}

export default Demo;
