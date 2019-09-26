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
            <strong>Nickname: </strong>
            {props.nickname}
          </p>
          <p>
            <strong>Breed: </strong>
            {props.breed}
          </p>
          <p>
            <strong>Birthday: </strong>
            {props.birthday}
          </p>
          <p>
            <strong>Temperament: </strong>
            {props.temperament}
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
