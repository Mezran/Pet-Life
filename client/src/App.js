import React from "react";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import UserContext from './context/UserContext';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import Sidebar from "./components/Sidebar/sidebar";
import Header from "./components/Header/header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

class App extends React.Component {

    state = {
      user: null
    }

    setUser = (user) => {
      this.setState({ user });
    }

  render() {
    const {user} = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <div className="container-fluid">
          <Header />
          <div className="row">

            {this.state.user ? <Sidebar /> : null}
            <div className={this.state.user ? "col-8" :"col-12" }>
              <UserContext.Provider value = {{setUser, user}}>
                <ProtectedRoutes exact path='/' component={Home}/>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/createAccount" component={CreateAccountPage} />
              </UserContext.Provider>
              <Footer/>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
