const mongoose = require("mongoose");

const petSitterSchema = new mongoose.Schema({
  file: {
    // data: Buffer,
    type: String
  },
  name: {
    type: String,
    trim: true
  },
  number: {
    type: String
  },
  address: {
    type: String
  },
  other: {
    type: String
  }
});

const PetSitter = mongoose.model("PetSitter", petSitterSchema);

module.exports = PetSitter;
