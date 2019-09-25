import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrescriptionFile from "../components/PrescriptionFile/prescriptionFile";
import axios from "axios";

class PrescriptionsPage extends Component {
  state = {
    prescriptions: [
      // {
      //   id: "1",
      //   title: "First Title",
      //   url: "https://via.placeholder.com/150",
      //   comment: "Lorem ipsum...."
      // },
      // {
      //   id: "2",
      //   title: "Second Title",
      //   url: "https://via.placeholder.com/300x400",
      //   comment: "Lorem ipsum...."
      // }
    ]
  };

  componentDidMount() {
    this.loadPrescriptions();
  }

  loadPrescriptions = () => {
    axios.get("/api/...").then(function(res) {
      this.setState({
        prescriptions: "res.data.docs"
      });
    });
  };

  render() {
    return (
      <div className="Prescriptions">
        <div className="row">
          <div className="col-9">
            <h2>Prescriptions</h2>
          </div>
          <div className="col-3 text-right">
            <Link
              to="/prescription/addDetail"
              className="btn btn-primary btn-lg"
            >
              Add New Prescription
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {this.state.prescriptions < 1 ? (
              <div className="alert alert-warning mt-4" role="alert">
                This pet doesn't have prescriptions
              </div>
            ) : null}
            {this.state.prescriptions.map(item => (
              <PrescriptionFile
                key={item.id}
                url={item.url}
                title={item.title}
                comment={item.comment}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PrescriptionsPage;
