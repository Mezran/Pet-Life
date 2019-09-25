import React from "react";
import axios from "axios";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import UserContext from "./context/UserContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import Sidebar from "./components/Sidebar/sidebar";
import Header from "./components/Header/header";
import Footer from "./components/Footer";
import Visits from "./pages/Visits";
import Home from "./pages/Home";
import Auth from "./utils/Auth";
import PetInfo from "./pages/PetInfo";
import AddDetailPage from "./pages/AddDetailPage";
import PetSitter from "./pages/PetSitter";
import CreatePetSitter from "./pages/CreatePetSitter";
import PrescriptionPage from "./pages/Prescriptions";
import "./global.scss";

class App extends React.Component {
  state = {
    user: false
  };

  setUser = user => {
    this.setState({ user });
  };

  componentDidMount() {
    // if token exists
    // go ask server for user associated with token
    if (Auth.isLoggedIn()) {
      axios
        .get("/api/me", {
          headers: {
            Authorization: "Bearer " + Auth.getToken()
          }
        })
        .then(response => {
          this.setUser(response.data);
        });
    }
  }

  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <UserContext.Provider value={{ setUser, user }}>
          <div className="container-fluid">
            <Header />
            <div className="row">
              {this.state.user ? <Sidebar /> : null}
              <div
                className={this.state.user ? "col-9 main-content" : "col-12"}
              >
                <ProtectedRoutes exact path="/" component={Home} />
                <Route exact path="/login" component={LoginPage} />
                <Route
                  exact
                  path="/createAccount"
                  component={CreateAccountPage}
                />
                <Route exact path="/petinfo" component={PetInfo} />
                <Route exact path="/Visits" component={Visits} />
                <ProtectedRoutes
                  exact
                  path="/addDetail"
                  render={props => (
                    <AddDetailPage
                      {...props}
                      pageTitle="Document"
                      postTo="/api/test"
                    />
                  )}
                />
                <ProtectedRoutes
                  exact
                  path="/petSitter"
                  component={PetSitter}
                />
                <ProtectedRoutes
                  exact
                  path="/petSitter/createPetSitter"
                  component={CreatePetSitter}
                />
                <ProtectedRoutes
                  exact
                  path="/prescription"
                  component={PrescriptionPage}
                />
                <ProtectedRoutes
                  exact
                  path="/prescription/addDetail"
                  render={props => (
                    <AddDetailPage
                      {...props}
                      pageTitle="Presciption"
                      postTo="/api/prescription"
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </UserContext.Provider>
        <Footer />
      </Router>
    );
  }
}

export default App;
