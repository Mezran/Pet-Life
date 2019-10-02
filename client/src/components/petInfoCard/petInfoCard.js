import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./petInfoCard.scss";

function PetInfoCard(props) {
  // let bday = props.birthday.splice(0, -12)
  const placeholderImg =
    "https://www.missingdogsuk.co.uk/wp-content/plugins/wp-job-manager-resumes/assets/images/candidate.png";
  return (
    <div className="PetInfoCard card">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 text-center">
          <div className="petImg">
            <img src={props.img || placeholderImg}></img>
          </div>
        </div>
        <div className="col-lg-7 text-start">
          {props.name ? (
            <p>
              <strong>Name: </strong>
              {props.name}
            </p>
          ) : null}
          {props.nickname ? (
            <p>
              <strong>Nickname: </strong>
              {props.nickname}
            </p>
          ) : null}
          {props.breed ? (
            <p>
              <strong>Breed: </strong>
              {props.breed}
            </p>
          ) : null}
          {props.birthday ? (
            <p>
              <strong>Birthday: </strong>
              {props.birthday.slice(0, -14)}
            </p>
          ) : null}
          {props.temperament ? (
            <p>
              <strong>Temperament: </strong>
              {props.temperament}
            </p>
          ) : null}
          {props.diet ? (
            <p>
              <strong>Diet: </strong>
              {props.diet}
            </p>
          ) : null}
        </div>
        <div className="col-md-2 text-center buttons">
          <Link
            to=""
            onClick={props.deletePetCB.bind(this, props.id)}
            className="btn btn-secondary btn-sm"
          >
            Remove
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PetInfoCard;
