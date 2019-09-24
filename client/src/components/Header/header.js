import React from "react";
import "./header.scss";
import UserContext from '../../context/UserContext'


const Header = props => (
  <UserContext.Consumer>
    {context => {
      return(
      <header className="Header">
        <div className="row">
          <div className="col-3 logo">
            <img src="./logo.png" alt="Pet Life Logo" />
          </div>
          <div className="col-9 text-right navbar">{context.user ? (
            `Username: ${context.user.username}`
          ) : (
            `Log In`
          )}</div>
        </div>
      </header>
    )}
  }
  </UserContext.Consumer>
);


export default Header;
