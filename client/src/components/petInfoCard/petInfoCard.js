import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./petInfoCard.scss";

function PetInfoCard(props) {
  // let bday = props.birthday.splice(0, -12)
  return (
    <div className="PetInfoCard card">
      <div className="row">
        <div className="col-3 text-center petInfoImage">
          <img src={props.img}></img>
        </div>
        <div className="col-7 text-start">
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
        <div className="col-md-2 text-center buttons">
          <Link to="" className="btn btn-primary">
            Edit
            </Link>
          <Link to="" className="btn btn-primary">
            Remove
            </Link>
        </div>
      </div>
    </div>
  );
}

export default PetInfoCard;
