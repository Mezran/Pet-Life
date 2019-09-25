const User = require("../models/User");
const jwt = require("jsonwebtoken");
const authWare = require("../customMiddleware/authware");
const petsConroller = require("../controllers/petsConroller");
const router = require("express").Router();

module.exports = function(app) {
  // post requests to /api/signup;
  // created a user based off of the User model
  // in out mongoDB and returns
  // json message saying user created.
  // if error, send error.
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    User.create(req.body)
      .then(function(result) {
        res.json({
          message: "user created"
        });
      })
      .catch(function(err) {
        res.status(500).json({
          error: err.message
        });
      });
  });

  // post requests to see if the user is authenticated.
  app.post("/api/authenticate", function(req, res) {
    console.log(req.body + "auth");
    const { username, password } = req.body;
    User.findOne({
      username: username
    }).then(function(dbUser) {
      if (!dbUser)
        return res.status(401).json({
          message: "Username and or password is incorrect"
        });
      if (dbUser.comparePassword(password)) {
        const token = jwt.sign(
          {
            data: dbUser._id
          },
          "secretKey"
        );

        res.json({
          id: dbUser._id,
          username: dbUser.username,
          token: token
        });
      } else {
        res.status(401).json({
          message: "Username and or password is incorrect"
        });
      }
    });
  });

  app.get("/api/me", authWare, function (req, res) {
    res.json({ username: req.user.username });
  })

  // testing protected routes. uses custom authWare middle ware to
  // check if the user is authenticated.
  app.get("/api/protected", authWare, function(req, res) {
    const user = req.user;
    res.json({
      message: user.username + ", should be protected"
    });
  });

  app.post("/api/savePets", petsConroller.create);
};
