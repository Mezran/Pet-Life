import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LoginForm from "../components/LoginForm/loginForm";

function LoginPage() {
  return (
    <div className="LoginPage container">
      <h1>Login</h1>
      <LoginForm />
      <p>
        If you don't have an account:
        <Link to="/createAccount" className="btn btn-outline-secondary">
          Create New account
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
