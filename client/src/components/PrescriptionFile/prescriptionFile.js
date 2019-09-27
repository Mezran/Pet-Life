import React from "react";
import "./prescriptionFile.scss";
import { Link } from "react-router-dom";

function PrescriptionFile(props) {
  return (
    <div className="prescriptionFile">
      <Link to="/prescription/addDetail" className="btn btn-primary btn-lg">
        Add New Prescription
      </Link>
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
    </div>
  );
}

export default PrescriptionFile;
