import React, { Component } from "react";
import "./loginForm.scss";
import { withRouter } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Auth from "../../utils/Auth";

class LoginForm extends Component {
  static contextType = UserContext;
  state = {
    username: "",
    password: "",
    err: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmitEvent = event => {
    event.preventDefault();
    console.log("Submited");
    const username = this.state.username;
    const password = this.state.password;
    if (username && password) {
      try {
        Auth.logIn(username, password, response => {
          this.context.setUser(response);
          this.props.history.push("/");
        });
      } catch (error) {
        alert("asdasd");
      }
    } else {
      this.setState({
        err: true
      });
    }
  };

  render() {
    return (
      <div className="LoginForm">
        {this.state.err ? (
          <div class="alert alert-danger" role="alert">
            Username and or password is incorrect
          </div>
        ) : null}
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <button
            type="submit"
            onClick={this.handleSubmitEvent}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
