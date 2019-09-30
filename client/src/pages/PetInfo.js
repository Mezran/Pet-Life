import React from "react";
// import API from "../utils/API2";
import axios from "axios";
import PetInfoCard from "../components/petInfoCard/petInfoCard";
import UserContext from "../context/UserContext";

class PetInfo extends React.Component {
  static contextType = UserContext;

  state = {
    pets: [],
    mounted: false,
    refreshed: false
  };

  componentDidMount() {
    let currentComponent = this;
    axios.get(`/api/user/${this.context.user.id}/petFamily`).then(data => {
      console.log(data);
      currentComponent.setState({
        pets: data.data.pets
      });
    });
  }

  componentDidUpdate() {
    if (this.state.mounted === false) {
      if (this.state.refreshed === false) {
        axios.get(`/api/user/${this.context.user.id}/petFamily`).then(res => {
          console.log(res.data);
          this.setState({
            pets: res.data.pets,
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

  deletePet = petId => {
    axios.delete(`/api/user/${petId}/petFamily`).then(function(res) {
      console.log("pet deleted");
    });
    let currentComponent = this;
    axios
      .get(`/api/user/${this.context.user.id}/petFamily`)
      .then(function(res) {
        console.log(res.data);
        currentComponent.setState({
          pets: res.data.pets
        });
      });
  };

  render() {
    return (
      <div className="petInfoCont">
        <div className="container">
          <h2>Pet Info</h2>
        </div>
        {this.state.pets.map(item => (
          <PetInfoCard
            key={item._id}
            id={item._id}
            img={item.image}
            name={item.name}
            breed={item.breed}
            nickname={item.nicknames}
            birthday={item.birthday}
            temperament={item.temperament}
            diet={item.diet}
            directions={item.directions}
            deletePetCB={this.deletePet}
          />
        ))}
      </div>
    );
  }
}

export default PetInfo;
