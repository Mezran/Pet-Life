import React from "react";
import "./header.scss";
import UserContext from "../../context/UserContext";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = props => (
  <UserContext.Consumer>
    {context => {
      return (
        <header className="Header">
          <div className="row">
            <div className="col-3 logo">
              <img src="./logo.png" alt="Pet Life Logo" />
            </div>
            <div className="col-9 text-right navbar">
              {context.user ? (
                <div>
                  <span>
                    Username:<strong> ${context.user.username}</strong>
                  </span>
                  <Link to="/">Log Out</Link>
                </div>
              ) : (
                <span>
                  <Link to="/Log In">Log Out</Link>
                </span>
              )}
            </div>
          </div>
        </header>
      );
    }}
  </UserContext.Consumer>
);

export default Header;
