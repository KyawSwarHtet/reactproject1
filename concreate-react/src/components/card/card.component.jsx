import React from "react";
import "./card.style.css";

const Card = (props) => (
  <div className="card-container">
    <h3>{props.player.name}</h3>
    <p>{props.player.email}</p>
  </div>
);

export default Card;
