import React from "react";
import PetInfoCard from "../components/petInfoCard/petInfoCard";

function PetInfo() {
  return (
    <div className="petInfoCont">
      <div className="container">
        <h1>Pet Info</h1>
      </div>
      <PetInfoCard
        img="https://via.placeholder.com/150"
        name="tintin"
        nicknames="tin"
        birthday="july"
        prescriptions="none"
        diet="veggie"
      />
    </div>
  );
}

export default PetInfo;
