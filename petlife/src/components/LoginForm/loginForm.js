import React from "react";
import "./loginForm.scss";

class LoginForm extends Component{
    state = {
        username: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState(){
          [name]: value
        }
    }

    handleSubmitEvent = event =>{
      event.preventDefault();
      console.log("Submited")
      this.setState({
        username: "",
        password: ""
      })
    }
    
    render(){
      return (
        <div className="LoginForm">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input
                type="email"
                className="form-control"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      );
    }
} 

export default LoginForm;