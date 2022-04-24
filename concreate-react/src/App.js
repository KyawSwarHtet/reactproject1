import React, { Component } from "react";
//import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Route, Switch, Link } from "react-router-dom";
// import Demo from "./demo";
import "./App.css";
import Cardlist from "./components/card-list/card-list.components";
import "./components/card-list/card-list.styles.css";
import Search from "./components/search/search.component";
import EventBinding from "./components/event-binding/event-binding.component";
import Parent from "./components/method-props/parent.components";
import ComponentUnmount from "./components/componentUnmount";

//Home
import Home from "./components/pages/home.component";
import About from "./components/pages/about.component";
import Detail from "./components/pages/detail.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      searchFields: "",
      isLoggedIn: true,
      name: "ITVisionHub",
      show: true,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ players: users }));
    console.log("ComponentDidMount");
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  //Return True or False
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Current state name =>", this.state.name);
    console.log("Next state name =>", nextState.name);
    // return (
    //   nextState.name !== this.state.name ||
    //   nextState.players !== this.state.players
    // );
    return true;
  }

  handleChange = (e) => {
    this.setState({ searchFields: e.target.value });
  };

  render() {
    console.log(this.state);
    const { players, searchFields } = this.state;
    const filteredPlayers = players.filter((player) => {
      return player.name.toLowerCase().includes(searchFields.toLowerCase());
    });

    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <br />
        <h1>{this.state.name}</h1>
        <button onClick={() => this.setState({ name: "Hello,Kyaw Swar" })}>
          Change Name
        </button>
        <br />
        <br />

        {this.state.show ? <ComponentUnmount /> : null}
        <button onClick={() => this.setState({ show: false })}>
          Hide Component
        </button>
      </div>
    );
  }
}

export default App;
