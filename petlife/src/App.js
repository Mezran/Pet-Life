import React from "react";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <Router>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/createAccount" component={CreateAccountPage} />
        </Router>
      </div>
    );
  }
}

export default App;
