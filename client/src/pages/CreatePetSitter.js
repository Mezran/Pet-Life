import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import FileUpload from "../upload/fileUpload";
import axios from "axios";
import PetSitter from "./PetSitter";

class CreatePetSitter extends Component {
  state = {
    file: "",
    name: "",
    number: "",
    address: "",
    other: ""
  };

  setFile = filePath => {
    this.setState({
      file: filePath
    });
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const petSitter = {
      file: this.state.file,
      name: this.state.name,
      number: this.state.number,
      address: this.state.address,
      other: this.state.other
    };
    console.log(petSitter);
    axios.post("/api/petSitters", petSitter).then(function() {
      window.location.href = "/petSitter";
    });
    this.setState({
      file: "",
      name: "",
      number: "",
      address: "",
      other: ""
    });
  };

  render() {
    return (
      <>
        <div style={{ marginTop: 10 }}>
          <div className="row">
            <div className="col-9">
              <h2>New Pet Sitters</h2>
            </div>
            <div className="col-3 text-right">
              <Link to="/petSitter" className="btn btn-success btn-lg">
                Go back to your sitters
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-4">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Picture:</label>
                  <FileUpload onComplete={this.setFile} />
                </div>
                <div className="form-group">
                  <label>Name: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="number"
                    value={this.state.number}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Address: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Other notes: </label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="other"
                    value={this.state.other}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Register Sitter"
                    className="btn btn-warning"
                    onClick={this.onSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CreatePetSitter;
