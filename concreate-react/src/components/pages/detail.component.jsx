import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Detail Id is {params.id} </h1>
      <p>This is greeting from Detail</p>
    </div>
  );
};

export default Detail;
