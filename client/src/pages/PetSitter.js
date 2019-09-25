import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class PetSitter extends Component {

    state = {
        petSitters: []
    }
componentDidMount() {
    axios.get("/api/petSitters").then(function (res) {
        console.log(res.data)
        this.setState({
            petSitters: res.data
        })
    })
}


render (){

    return (<div>
            <Link
              to="/petSitter/createPetSitter"
              className="btn btn-warning btn-lg"
            >
              Add a pet sitter!
            </Link> 
            {this.state.petSitters.map(item => 
                  <div className="sitterCard">
                  <div className="card">
                    <div className="row ">
                      <div className="col-md-4">
                        <img src={item.file}></img>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h4 className="card-name">{item.name}</h4>
                          <h5 className="card-number">{item.number}</h5>
                          <h6 className="card-address">{item.address}</h6>
                          <p className="card-other">{item.other}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)}
    </div>
    )

}
}
export default PetSitter;