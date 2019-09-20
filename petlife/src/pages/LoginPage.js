import React from "react";
import LoginForm from "../components/LoginForm/loginForm";

function LoginPage() {
  return (
    <div className="LoginPage container">
      <h1>Login</h1>
      <LoginForm />
      <p>If you don't have an account, create one here:</p>
    </div>
  );
}

export default LoginPage;
