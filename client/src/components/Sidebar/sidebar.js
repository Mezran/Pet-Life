import React from "react";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div id="sidebar" className="col-3">

      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="petFamily">Pet Family</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/petInfo">Pet Info</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/prescription">Prescription</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/doctorsVisits">Doctors Visits</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/petSitter">Pet Sitter</a>
        </li>
        
      </ul>
    </div>
  );
}

export default Sidebar;
