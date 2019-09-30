import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

function Pet(props) {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <div className="col-12 col-md-6 col-lg-3">
          <div className="familyCard text-center">
            <Link to={`/user/${user.id}/pets`}>
              <div>
                <div className="petImg">
                  <img
                    src={
                      props.img ||
                      "https://www.missingdogsuk.co.uk/wp-content/plugins/wp-job-manager-resumes/assets/images/candidate.png"
                    }
                    className="card-img-top familyCard"
                    alt="first pet"
                  />
                </div>
                <div className="famName">
                  <p>{props.name}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </UserContext.Consumer>
  );
}

export default Pet;
