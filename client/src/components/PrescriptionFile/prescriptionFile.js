import React from "react";

function PrescriptionFile(props) {
  return (
    <div className="card">
      <div className="row ">
        <div className="col-md-4">
          <img src={props.url}></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrescriptionFile;
