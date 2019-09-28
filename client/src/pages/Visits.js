import AddVisits from "../components/AddVisits";
import PastVisits from "../components/PastVisits";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/UserContext";
import VisitTable from "../components/VisitTable";

class Visits extends Component {
  static contextType = UserContext;
  state = {
    mounted: false,
    refreshed: false,
    pets: [],
    activePetVisit: [],
    activePet: {}
  };

  activePet = e => {
    let id = e.target.id;
    console.log(id);
    const newActivePet = this.state.pets.find(pet => pet._id === id);
    console.log(newActivePet);
    this.setState({
      activePetVisit: newActivePet.docVisits,
      activePet: {
        name: newActivePet.name,
        id: newActivePet._id
      }
    });
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
        activePetVisit: response.data.pets[0].docVisits,
        mounted: true
      });
    });
  }

  componentDidUpdate() {
    if (this.state.mounted == false) {
      if (this.state.refreshed == false) {
        let currentComponent = this;
        axios
          .get(`/api/user/${this.context.user.id}/petFamily`)
          .then(response => {
            console.log(response);
            currentComponent.setState({
              pets: response.data.pets,
              activePet: {
                name: response.data.pets[0].name,
                id: response.data.pets[0]._id
              },
              activePetVisit: response.data.pets[0].docVisits,
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

  render() {
    return (
      <div>
        <h2> Visits</h2>
        <ul className="nav nav-tabs">
          {this.state.pets.map(result => (
            <li className="nav-item" key={result._id}>
              <button
                onClick={e => this.activePet(e)}
                id={result._id}
                className={
                  result._id === this.state.activePet.id
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {result.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="visit-table">
          {this.state.activePetVisit.length < 1 ? (
            <div className="alert alert-warning mt-4" role="alert">
              This pet doesn't have doctor visits
            </div>
          ) : (
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Doctors name</th>
                  <th scope="col">Hospital</th>
                  {/* <th scope="col">Details</th> */}
                </tr>
              </thead>
              <tbody>
                {this.state.activePetVisit.map(result => (
                  <VisitTable
                    key={result._id}
                    date={result.date}
                    doctorsName={result.docName}
                    hospital={result.hospital}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
        <AddVisits
          id={this.state.activePet.id}
          name={this.state.activePet.name}
        />
      </div>
    );
  }
}

export default Visits;
