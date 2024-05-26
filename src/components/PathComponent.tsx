import React from "react";
import { useParams } from "react-router-dom";

function PathComponent() {
  const { id } = useParams();
  return (
    <div>
      <h1>Something is for - {id}</h1>
    </div>
  );
}

export default PathComponent;
