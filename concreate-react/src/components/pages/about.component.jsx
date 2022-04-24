import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  // console.log();
  return (
    <div>
      <h1>About</h1>
      <p>This is greeting from About</p>
      <Link to="/detail/8">Go to Detail id 8</Link>
      <br />
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default About;
