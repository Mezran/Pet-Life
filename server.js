const express = require("express");
const upload = require("./petlife/utils/upload");
const cors = require("cors");
const PORT = process.env.PORT || 7000

const server = express();

var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};

server.use(cors(corsOptions));
server.post("/upload", upload);

server.listen(PORT, () => {
    console.log("Serving listening on " + PORT)
})
