import React, { Component } from "react";
import "./header.scss";
import UserContext from "../../context/UserContext";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Auth from "../../utils/Auth";

class Header extends Component {
  handleLogOut = () => {
    Auth.logOut(() => {
      window.location.href = "/";
    });
    // cb missing
  };

  render() {
    return (
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
                    <>
                      <span>
                        Username:<strong> {context.user.username}</strong>
                      </span>
                      <button
                        onClick={this.handleLogOut}
                        className="btn btn-link"
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    <>
                      <span>
                        <Link className="btn btn-link" to="/login">
                          Log In
                        </Link>
                      </span>
                      <Link className="btn btn-link" to="/createAccount">
                        Create New Account
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </header>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Header;
