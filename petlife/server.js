const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.argv.PORT || 3000;
// for file upload component
const upload = require("./petlife/upload/upload");
const cors = require("cors");

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.post("/upload", upload);

//routes 
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/petdb";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

// Middleware for app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



app.listen(PORT, function() {
  console.log("App listening on Port: " + PORT);
});
