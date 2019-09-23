import React from "react";
import "./petInfo.css"

function PetInfo() {
  return (
      <>
    <div className="container">
      <h1>Pet Info</h1>
    </div>
    <div className="jumbotron petInfoJumbo">
        <p>Name:</p>
        <p>Nicknames:</p>
        <p>Birthday:</p>
        <p>Diet:</p>
        <p>Prescriptions:</p>
    </div>
    </>
  );
}

export default PetInfo;
