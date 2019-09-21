import React from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar" className="col-3">

      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" to="/petFamily">Pet Family</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/petInfo">Pet Info</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/prescription">Prescription</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/doctorsVisits"> Visits</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/petSitter">Pet Sitter</NavLink>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;
