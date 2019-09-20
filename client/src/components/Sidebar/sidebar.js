import React from "react";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div id="sidebar" className="col-3">

      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="petFamily">Pet Family</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/petInfo">Pet Info</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/prescription">Prescription</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/doctorsVisits">Doctors Visits</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/petSitter">Pet Sitter</a>
        </li>
        
      </ul>
    </div>
  );
}

export default Sidebar;
