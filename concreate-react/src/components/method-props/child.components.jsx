import React from "react";

function Child(props) {
  return (
    <div>
      {/* <button onClick={props.handleGreet.bind(this, "Child")}> */}
      <button onClick={() => props.handleGreet("Child")}>
        Greet to Parent
      </button>
    </div>
  );
}

export default Child;
