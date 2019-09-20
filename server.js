const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.argv.PORT || 3001;

// Middleware for app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

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

app.listen(PORT, function() {
  console.log("App listening on Port: " + PORT);
});
