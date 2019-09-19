import React from "react";
import CreateAccountForm from "../components/CreateAccountForm/createAccountForm";

function CreateAccountPage() {
  return (
    <div className="LoginPage container">
      <h1>Create Account</h1>
      <CreateAccountForm />
      <p>If you already have an account, login here:</p>
    </div>
  );
}

export default CreateAccountPage;
