import React, { Component } from "react";
import Images from "./Images";
import { API } from "../utils/API";



export default class FileUpload extends Component {
    state = {
        uploading: false,
        images: []
    }

    // render() {
    //     return (
           
    //     );
    // }

}

// for file upload component
require("dotenv").config();
const cors = require("cors");
const cloudinary = require("cloudinary");
const formData = require("express-form-data");

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})



const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.post("/upload", upload);

