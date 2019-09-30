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
    activePet: {},
    activePetPrescription: []
  };

  componentDidMount() {
    let currentComponent = this;
    axios.get(`/api/user/${this.context.user.id}/petFamily`).then(response => {
      console.log(response);
      currentComponent.setState({
        pets: response.data.pets,
        activePet: {
          name: response.data.pets[0].name,
          id: response.data.pets[0]._id
        },
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
              activePet: {
                name: res.data.pets[0].name,
                id: res.data.pets[0]._id
              },
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
    const newActivePet = this.state.pets.find(pet => pet._id === id);
    console.log(newActivePet);
    this.setState({
      activePetPrescription: newActivePet.prescriptions,
      activePet: {
        name: newActivePet.name,
        id: newActivePet._id
      }
    });
  };
  render() {
    // const prescriptions = this.state.activePet.prescriptions;
    // console.log(prescriptions);

    const { id: userId } = this.context.user || {};

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
                className={
                  item._id === this.state.activePet.id
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="row">
          <div className="col-12 text-right">
            <Link
              to={`/user/${userId}/prescription/addDetail/${this.state.activePet.id}`}
              className="btn btn-warning btn-lg"
            >
              Add new prescription for {this.state.activePet.name}!
            </Link>
          </div>
          <div className="col-12">
            {this.state.activePetPrescription.length < 1 ? (
              <>
                <div className="alert alert-warning mt-4" role="alert">
                  This pet doesn't have prescriptions
                </div>
              </>
            ) : (
              this.state.activePetPrescription.map(item => (
                <PrescriptionFile
                  key={item.id}
                  file={item.file}
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
