const mongoose = require("mongoose")

const petSitterSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
      },
      image: {
        data: Buffer, contentType: String
      },
      phoneNum: {
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