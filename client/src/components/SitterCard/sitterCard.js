import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./sitterCard.scss";

function SitterCard(props) {
  return (
    <div className="sitterCard">
      <div className="card">
        <div className="row ">
          {props.file ? (
            <div className="col-md-3 text-center">
              <img src={props.file}></img>
            </div>
          ) : null}
          <div className={props.file ? "col-md-7" : "col-10"}>
            <div className="card-body">
              <h4 className="card-name">{props.name}</h4>
              <h5 className="card-number">{props.number}</h5>
              <h6 className="card-address">{props.address}</h6>
              <p className="card-other">{props.other}</p>
            </div>
          </div>
          <div className="col-md-2 text-center buttons">
            <button
              className="btn btn-secondary"
              onClick={() => props.deleteSitter(props.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitterCard;
