const User = require("../models/User");
const jwt = require("jsonwebtoken");
const authWare = require("../customMiddleware/authware");
const petsConroller = require("../controllers/petsConroller");
// const router = require("express").Router();
var db = require("../models");
const Pet = require("../models/Pets");
const PetSitter = require("../models/PetSitterMod");

module.exports = function(app) {
  // post requests to /api/signup;
  // created a user based off of the User model
  // in out mongoDB and returns
  // json message saying user created.
  // if error, send error.
  app.get("/api/visits", function(req, res) {
    Pet.find({})
      .then(function(found) {
        res.json(found);
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
  });

  app.post("/api/visits", function(req, res) {
    console.log(req.body);
    Pet.create(req.body)
      .then(function(saved) {
        res.json({ message: "saved" });
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
  });

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
    console.log(req.body);
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

  app.get("/api/me", authWare, function(req, res) {
    res.json({ username: req.user.username, id: req.user._id });
  });

  // testing protected routes. uses custom authWare middle ware to
  // check if the user is authenticated.
  app.get("/api/protected", authWare, function(req, res) {
    const user = req.user;
    res.json({
      message: user.username + ", should be protected"
    });
  });

  

  // Pet Sitter routes
  app.post("/api/user/:id/petSitters", function(req, res) {
    console.log(req.body);
    let id = req.params.id;
    PetSitter.create(req.body)
    .then(function(sitter) {
      return db.User.findByIdAndUpdate(id, { $push: { petSitters: sitter._id } }, { new: true });
    })
      .then(sitter => {
        res.json({
          message: "sitter created"
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  app.get("/api/user/:id/petSitters", function(req, res) {
    let id = req.params.id;
    User.findById(id).populate("petSitters")
      .then(response => res.json(response))
      .catch(function(err) {
        console.log(err);
      });
  });

  // app.get("/userSitters", function(req, res) {
  //   db.User.find({}).populate("petSitters").then(function(user){
  //     res.json(user);
  //   })
  //   .catch(function(err){
  //     res.json(err);
  //   })
  
  // })

  app.post("/api/savePets", petsConroller.create);
};
