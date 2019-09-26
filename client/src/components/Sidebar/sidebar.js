import React from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { Consumer } from "../../context/UserContext";

function Sidebar() {
  return (
    <div id="sidebar" className="col-3">
      <Consumer>
        {context => (
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link" to="/PetFamily">Pet Family</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/petInfo">Pet Info</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/prescription">Prescription</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/visits"> Visits</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/user/${context.user.id}/petSitters`}>Pet Sitter</NavLink>
            </li>
          </ul>
        )}
      </Consumer>
    </div>
  );
}

export default Sidebar;
