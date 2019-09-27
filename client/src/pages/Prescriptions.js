import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrescriptionFile from "../components/PrescriptionFile/prescriptionFile";
import axios from "axios";
import UserContext from "../context/UserContext";

class PrescriptionsPage extends Component {
  static contextType = UserContext;
  state = {
    pets: [],
    mounted: false,
    refreshed: false,
    activePetPrescription: []
  };

  componentDidMount() {
    let currentComponent = this;
    axios.get(`/api/user/${this.context.user.id}/petFamily`).then(response => {
      console.log(response);
      currentComponent.setState({
        pets: response.data.pets,
        activePetPrescription: response.data.pets[0].prescriptions,
        mounted: true
      });
    });
  }
  componentDidUpdate() {
    if (this.state.mounted == false) {
      if (this.state.refreshed == false) {
        console.log("updateRan");
        let currentComponent = this;
        axios
          .get(`/api/user/${this.context.user.id}/petFamily`)
          .then(function(res) {
            console.log(res.data);
            currentComponent.setState({
              pets: res.data.pets,
              activePetPrescription: res.data.pets[0].prescriptions,
              refreshed: true
            });
          });
      } else {
        this.setState({
          mounted: true
        });
      }
    }
  }
  activePet = e => {
    let id = e.target.id;
    console.log(id);
    const activePet = this.state.pets.find(pet => pet._id === id);
    console.log(activePet);
    this.setState({
      activePetPrescription: activePet.prescriptions
    });
  };
  render() {
    // const prescriptions = this.state.activePet.prescriptions;
    // console.log(prescriptions);

    return (
      <div className="Prescriptions">
        <div className="row">
          <div className="col-9">
            <h2>Prescriptions</h2>
          </div>
        </div>
        <ul className="nav nav-tabs">
          {this.state.pets.map(item => (
            <li className="nav-item" key={item._id}>
              <button
                onClick={e => this.activePet(e)}
                id={item._id}
                className="nav-link active"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="row">
          <div className="col-12">
            {this.state.activePetPrescription.length < 1 ? (
              <>
                <div className="alert alert-warning mt-4" role="alert">
                  This pet doesn't have prescriptions
                </div>
                <Link
                  to="/user/prescription/addDetail"
                  className="btn btn-primary btn-lg"
                >
                  Add New Prescription
                </Link>
              </>
            ) : (
              this.state.activePetPrescription.map(item => (
                <PrescriptionFile
                  key={item.id}
                  url={item.url}
                  title={item.title}
                  comment={item.comment}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PrescriptionsPage;
