import "./style.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PastVisits from "../PastVisits";
import UserContext from "../../context/UserContext";

class AddVisits extends Component {
  static contextType = UserContext;

  state = {
    date: "",
    doctorsName: "",
    hospital: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  saveVisit = event => {
    // event.preventDefault();
    let newVisit = {
      date: this.state.date,
      docName: this.state.doctorsName,
      hospital: this.state.hospital
    };
    axios.post(`/api/pets/${this.props.id}/visits`, newVisit).then(
      this.setState({
        date: "",
        doctorsName: "",
        hospital: ""
      })
    );
  };

  render() {
    return (
      <div className="VisitPage">
        <div className="card">
          <div className="card-header bg-dark text-light">
            Add Visits for <strong>{this.props.name}</strong>
          </div>
          <div className="card-body">
            <form>
              <input
                type="text"
                name="date"
                className="form-control"
                placeholder="Date"
                value={this.state.date}
                onChange={this.handleInputChange}
              />
              <input
                type="text"
                name="doctorsName"
                className="form-control"
                placeholder="Doctors Name"
                value={this.state.doctorsName}
                onChange={this.handleInputChange}
              />
              <input
                type="text"
                name="hospital"
                className="form-control"
                placeholder="Hospital"
                value={this.state.hospital}
                onChange={this.handleInputChange}
              />
              <button
                id={this.props.id}
                onClick={this.saveVisit}
                className="btn btn-warning mt-3"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddVisits;
