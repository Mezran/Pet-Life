import axios from "axios";

function Auth() {
  function logIn(username, password, cb) {
    axios
      .post("/api/authenticate", {
        username: username,
        password: password
      })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        cb(response.data);
      })
      .catch(err => {
        console.log(err);
        // cb();
      });
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  function logOut(cb) {
    localStorage.removeItem("token");
    cb();
  }

  function isLoggedIn() {
    return !!getToken();
  }

  return {
    logIn,
    logOut,
    isLoggedIn,
    getToken
  };
}

export default Auth();
