import React from "react";
import Card from "../card/card.component";

const Cardlist = (props) => {
  console.log(props.play);
  return (
    <div className="card-list">
      {props.play.map((player) => (
        <Card key={player.id} player={player}></Card>
      ))}
    </div>
  );
};

export default Cardlist;
