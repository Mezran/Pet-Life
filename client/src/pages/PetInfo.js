import React from "react";
import "./petInfo.css";
import API from "../utils/API2";
import axios from "axios";

class PetInfo extends React.Component {

  state = {
    petName: "",
    nicknames: "",
    breed: "",
    birthday: "",
    allergies: "", 
    temperament: "", 
    diet: "",
    directions: "",
    id: "5d8c2b38e773341971f43e8c"

};

componentDidMount () {
  axios.get("/api/getPets/" + this.state.id).then( data => {
    console.log(data)
    this.setState({ 
      petName: data.data.name,
      breed: data.data.breed,
      diet: data.data.diet,
      birthday: data.data.birthday.slice(0, -14),
      temperament: data.data.temperament,
      nicknames: data.data.nicknames })
  })
}

  render() {
  return (
    <div className="petInfoCont">
      <div className="container">
        <h1>Pet Info</h1>
      </div>
      <div className="jumbotron petInfoJumbo">
        <div className="col text-right petInfoImage"></div>
        <div className="col text-start">
          <p>Name: {this.state.petName}</p>
          <p>Nicknames: {this.state.nicknames}</p>
          <p>Breed: {this.state.breed}</p>
          <p>Birthday: {this.state.birthday}</p>
          <p>Temperament: {this.state.temperament}</p>
          <p>Diet: {this.state.diet}</p>
        </div>
      </div>
    </div>
  );
}
}

export default PetInfo;
