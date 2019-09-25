import React from "react";
import API from "../utils/API2";

function randomComponent (props) {
    return <h1></h1>
}

class petFamily extends React.Component {
  state = {
      petName: "",
      breed: "",
      birthday: "",
      // prescriptions: [],
      allergies: "", 
      temperament: "", 
      diet: "",
      directions: ""

  };

  submitData = data => {
    const petData = {
        name: this.state.petName,
        breed: this.state.breed, 
        birthday: this.state.birthday, 
        prescriptions: this.state.prescriptions,
        allergies: this.state.allergies, 
        temperament: this.state.temperament, 
        diet: this.state.diet, 
        directions: this.state.directions
    }
    API.savePet(petData).then( 
        // return petID from mongo and apply to User model.
        
    )


    console.log(petData);

  }

  handleInputChange = event => {
      const { name, value } = event.target
      this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label >Pet Name</label>
          <input
            name="petName"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.petName}
          />
          <label >Breed</label>
          <input
            name="breed"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.breed}
          />
          <label >Birthday</label>
          <input
            name="birthday"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.birthday}
          />
          <label >prescriptions</label>
          {/* <input
            name="prescriptions"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.prescriptions}
          /> */}
          <label >allergies</label>
          <input
            name="allergies"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.allergies}
          />
          <label >temperament</label>
          <input
            name="temperament"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.temperament}
          />
          <label >diet</label>
          <input
            name="diet"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.diet}
          />
          <label >directions</label>
          <textarea
            name="directions"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.directions}
          />
        </div>
        <button onClick={this.submitData} type="submit">
          Submit Pet
        </button>
      </div>
    );
  }
}

export default petFamily;
