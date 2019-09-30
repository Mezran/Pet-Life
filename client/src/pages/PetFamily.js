import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";
import Pet from "../components/Family/index";

class PetFamily extends React.Component {
  static contextType = UserContext;

  state = {
    pets: [],
    mounted: false,
    refreshed: false
  };

  componentDidMount() {
    if (!this.context.user) return;
    axios.get(`/api/user/${this.context.user.id}/petFamily`).then(res => {
      console.log(res.data);
      this.setState({
        pets: res.data.pets,
        mounted: true
      });
    });
  }

  componentDidUpdate() {
    if (this.state.mounted === false) {
      if (this.state.refreshed === false) {
        console.log("updateRan + petFam");
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

  render() {
    const { user } = this.context;
    return (
      <div className="row">
        {this.state.pets.map(item => {
          return <Pet key={item._id} img={item.image} name={item.name} />;
        })}
        <div className="col-12 col-md-6 col-lg-3 text-center">
          <button className="familyCard">
            <Link to={`/user/${user.id}/pets/createPet`}>
              <div>
                <div className="petImg">
                  <img
                    src="https://www.missingdogsuk.co.uk/wp-content/plugins/wp-job-manager-resumes/assets/images/candidate.png"
                    className="card-img-top"
                    alt="newe pet"
                  />
                </div>
                <div className="famName">
                  <p> + Add New Pet</p>
                </div>
              </div>
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default PetFamily;
