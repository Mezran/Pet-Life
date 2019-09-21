import React, { Component } from "react";
import "./loginForm.scss";
import UserContext from "../context/UserContext";
import Auth from "../../utils/Auth";

class LoginForm extends Component {
  static contextType = UserContext;
  state = {
    username: "",
    password: ""
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
      Auth.logIn(username, password, response => {
        this.context.setUser(response);
        this.props.history.push("/");
      });
    } else {
      console.log("Something is incorrect.");
    }
  };

  render() {
    return (
      <div className="LoginForm">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
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
            <label for="exampleInputPassword1">Password</label>
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

export default LoginForm;
