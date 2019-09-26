import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext"
import axios from  "axios";
import Pet from "../components/Family/index"

class PetFamily extends React.Component {
  static contextType = UserContext;
  state = {
    pets: []
  }
  componentDidMount() {
    let currentComponent = this;
    axios.get(`/api/user/${this.context.user.id}/petFamily`).then(data => {
      console.log(data);
      currentComponent.setState({
        pets: data.data.pets
      });
    });
  }

  render() {
    const { user } = this.context;
    return (
    <>
    {this.state.pets.map( item => {
        return (
            <Pet 
            key={item.id}
            img={item.image}
            name={item.name}
            />
        )
    })}
    <button className="familyCard">
        <Link to={`/user/${user.id}/pets/createPet`}>
          <div>
            <img
              src="https://www.missingdogsuk.co.uk/wp-content/plugins/wp-job-manager-resumes/assets/images/candidate.png"
              className="card-img-top familyCard"
              alt="newe pet"
            />
            <div className="card-body">
              <p className="card-text"> + Add New Pet</p>
            </div>
          </div>
        </Link>
      </button>
    </>
  );
  }
}


export default PetFamily;
