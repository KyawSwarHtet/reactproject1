import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is greeting from Home</p>
      <Link to="/about">About</Link> <br />
      <Link to="/detail/6">Detail Id 6</Link>
    </div>
  );
};

export default Home;
