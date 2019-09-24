import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import CreateAccountForm from "../components/CreateAccountForm/createAccountForm";

function CreateAccountPage() {
  return (
    <div className="LoginPage container">
      <h1>Create Account</h1>
      <CreateAccountForm />
      <p>
        If you already have an account, login <Link to="/login">here</Link>
      </p>
    </div>
  );
}

export default CreateAccountPage;
