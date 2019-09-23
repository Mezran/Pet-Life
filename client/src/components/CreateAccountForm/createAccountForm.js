import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./createAccountForm.scss";

class CreateAccountForm extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: ""
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
    axios
      .post("/api/signup", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response.data);
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="CreateAccountForm">
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
          <div className="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Password"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
            />
          </div>
          <button
            onClick={this.handleSubmitEvent}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateAccountForm);
