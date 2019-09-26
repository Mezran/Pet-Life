const mongoose = require("mongoose");

const prescriptionsSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  image: {
    data: Buffer, contentType: String
  },
  expDate: {
    type: Date
  },
  directions: {
    type: String,
    trim: true
  }
})

const doctorVisitSchema = new mongoose.Schema({
  date: {
    type: Date
  },
  docName: {
    type: String,
    trim: true
  },
  hospital: {
    type: String
  },
  details: {
    title: String,
    url: String,
    comments: String
  }
})

const petSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true },
  nicknames: {
    type: String,
    trim: true
  },
  breed: { 
    type: String,
    trim: true },
  birthday: { 
    type: Date
    },
  prescriptions: [prescriptionsSchema],
  allergies: { type: Array },
  temperament: { 
    type: String,
    trim: true
   },
  diet: { 
    type: String,
  },
  directions: { type: String },
  docVisits: [doctorVisitSchema],
  image: {
    type: String
  }
});

const Pet = mongoose.model("Pets", petSchema);

module.exports = Pet;
 