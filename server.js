require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// for file upload component
const cors = require("cors");
const cloudinary = require("cloudinary");
const formData = require("express-form-data");
const { CLIENT_ORIGIN } = require("./config");

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})


app.use(cors({ 
  origin: CLIENT_ORIGIN 
}))

app.use(formData.parse())

app.get('/wake-up', (req, res) => res.send("loading"))

app.post('/image-upload', (req, res) => {

  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
  Promise
    .all(promises)
    .then(results => res.json(results))
    .catch((err) => res.status(400).json(err))
});

app.post("/image-upload", (req, res) => {
  const path = Object.values(Object.values(req.files)[0])[0].path
  cloudinary.uploader.upload(path)
    .then(image => res.json([image]))
})
// Middleware for app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}

// require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/dbPet";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

app.listen(PORT, function() {
  console.log("App listening on Port: " + PORT);
});
