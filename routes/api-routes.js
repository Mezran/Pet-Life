const User = require("../models/User");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");
const authWare = require("../customMiddleware/authware");
const { petsController, userController } = require("../controllers");

var db = require("../models");
const Pet = require("../models/Pets");
const PetSitter = require("../models/PetSitterMod");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

module.exports = function(app) {
  app.post("/api/image-upload", (req, res) => {
    const values = Object.values(req.files);
    const promises = values.map(image =>
      cloudinary.uploader.upload(image.path)
    );

    Promise.all(promises)
      .then(results => res.json(results))
      .catch(err => res.status(400).json(err));
  });

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

  app.get("/api/user/:id/petFamily", function(req, res) {
    let id = req.params.id;
    User.findById(id)
      .populate("pets")
      .then(response => res.json(response))
      .catch(function(err) {
        console.log(err);
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
        return db.User.findByIdAndUpdate(
          id,
          { $push: { petSitters: sitter._id } },
          { new: true }
        );
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
    User.findById(id)
      .populate("petSitters")
      .then(response => res.json(response))
      .catch(function(err) {
        console.log(err);
      });
  });

  app.delete("/api/user/:id/petSitters", function(req, res) {
    let id = req.params.id;
    PetSitter.deleteOne(
      {
        _id: id
      },
      function(err, removed) {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          console.log(removed);
          res.send(removed);
        }
      }
    );
  });

  // Pet Routes
  app.post("/api/user/:id/createPet", function(req, res) {
    let id = req.params.id;
    console.log(req.body);
    Pet.create(req.body)
      .then(function(pet) {
        return db.User.findByIdAndUpdate(
          id,
          { $push: { pets: pet._id } },
          { new: true }
        );
      })
      .then(() => {
        res.json({ message: "Pet created" });
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  app.delete("/api/user/:id/petFamily", function(req, res) {
    let id = req.params.id;
    console.log("pet delete: " + id)
    Pet.deleteOne(
      {
        _id: id
      },
      function(err, removed) {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          console.log("else: " + removed);
          res.send(removed);
        }
      }
    );
  });

  app.get("/api/user/:id/petFamily", function(req, res) {
    let id = req.params.id;
    User.findById(id)
      .populate("pets")
      .then(response => res.json(response))
      .catch(function(err) {
        console.log(err);
      });
  });

  app.get("/api/user/:id/visits", function(req, res) {
    Pet.find({})
      .then(function(found) {
        res.json(found);
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
  });

  app.post("/api/pets/:id/prescription", function(req, res) {
    const id = req.params.id;
    Pet.findByIdAndUpdate(
      id,
      { $push: { prescriptions: req.body } },
      { new: true }
    )
      .then(function() {
        res.json({ message: "Prescription Saved" });
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  // Visits routes
  app.post("/api/pets/:id/visits", function(req, res) {
    const id = req.params.id;
    Pet.findByIdAndUpdate(id, { $push: { docVisits: req.body } }, { new: true })
      .then(function() {
        res.json({ message: "Visit Saved" });
      })
      .catch(function(err) {
        console.log(err);
      });
  });
};
