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
      });
  }

  function logOut(cb) {
    localStorage.removeItem("token");
    cb();
  }
  return {
    logIn: logIn,
    logOUt: logOut
  };
}

export default Auth();
