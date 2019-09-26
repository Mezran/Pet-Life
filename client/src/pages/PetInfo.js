import React from "react";
import API from "../utils/API2";
import axios from "axios";
import PetInfoCard from "../components/petInfoCard/petInfoCard";

class PetInfo extends React.Component {
  state = {
    petName: "",
    nickname: "",
    breed: "",
    birthday: "",
    allergies: "",
    temperament: "",
    diet: "",
    directions: "",
    id: " "
  };

  componentDidMount() {
    axios.get("/api/getPets/" + this.state.id).then(data => {
      console.log(data);
      this.setState({
        // petName: data.data.name,
        // breed: data.data.breed,
        // diet: data.data.diet,
        // birthday: data.data.birthday.slice(0, -14),
        // temperament: data.data.temperament,
        // nickname: data.data.nicknames
      });
    });
  }

  render() {
    return (
      <div className="petInfoCont">
        <div className="container">
          <h1>Pet Info</h1>
        </div>
        <PetInfoCard
          img="https://via.placeholder.com/150"
          name={this.state.petName}
          breed={this.state.breed}
          nickname={this.state.petName}
          birthday={this.state.birthday}
          temperament={this.state.temperament}
          diet={this.state.diet}
        />
      </div>
    );
  }
}

export default PetInfo;
