import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext"


function Pet(props) {
  return (
    <UserContext.Consumer>
      
      { ({user}) => ( 
      <button className="familyCard">
        <Link to={`/user/${user.id}/pets`}>
          <div>
            <img
              src={props.img}
              className="card-img-top familyCard"
              alt="first pet"
            />
            <div className="card-body">
              <p className="card-text">{props.name}</p>
            </div>
          </div>
        </Link>
      </button>
      
      )
    }
  </UserContext.Consumer>
  );
}

export default Pet;
