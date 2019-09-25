import React from "react";
import "./petInfoCard.scss";

function PetInfoCard(props) {
  return (
    <div className="PetInfoCard card">
      <div className="row">
        <div className="col-4 text-center petInfoImage">
          <img src={props.img}></img>
        </div>
        <div className="col-8 text-start">
          <p>
            <strong>Name: </strong>
            {props.name}
          </p>
          <p>
            <strong>Nicknames: </strong>
            {props.nicknames}
          </p>
          <p>
            <strong>Birthday: </strong>
            {props.birthday}
          </p>
          <p>
            <strong>Prescriptions: </strong>
            {props.prescriptions}
          </p>
          <p>
            <strong>Diet: </strong>
            {props.diet}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PetInfoCard;
