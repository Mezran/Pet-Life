import React from "react";
import "./header.scss";

function Header() {
  return (
    <header className="Header">
      <div className="row">
        <div className="col-3 logo">
          <img src="./logo.png" alt="Pet Life Logo" />
        </div>
        <div className="col-9 text-right navbar">Navbar</div>
      </div>
    </header>
  );
}

export default Header;
