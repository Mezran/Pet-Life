import React from "react";
import "./sitterCard.scss";

function SitterCard(props) {
  return (
    <div className="sitterCard">
      <div className="card">
        <div className="row ">
          <div className="col-md-4">
            <img src={props.file}></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-name">{props.name}</h4>
              <h5 className="card-number">{props.number}</h5>
              <h6 className="card-address">{props.address}</h6>
              <p className="card-other">{props.other}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitterCard;
