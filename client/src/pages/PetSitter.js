import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import SitterCard from "../components/SitterCard/sitterCard";

class PetSitter extends Component {
  state = {
    petSitters: []
  };
  componentDidMount() {
    axios.get("/api/petSitters").then(function(res) {
      console.log(res.data);
      this.setState({
        petSitters: res.data
      });
    });
    console.log("Petsitter page");
  }

  render() {
    return (
      <div className="PetSitter">
        <div className="row">
          <div className="col-9">
            <h2>Pet Sitters</h2>
          </div>
          <div className="col-3 text-right">
            <Link
              to="/petSitter/createPetSitter"
              className="btn btn-warning btn-lg"
            >
              Add a pet sitter!
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {this.state.petSitters < 1 ? (
              <div className="alert alert-warning mt-4" role="alert">
                You don't have pet sitters in your records
              </div>
            ) : null}
            {this.state.petSitters.map(item => (
              <SitterCard
                img={item.img}
                name={item.name}
                number={item.number}
                address={item.address}
                other={item.other}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default PetSitter;
