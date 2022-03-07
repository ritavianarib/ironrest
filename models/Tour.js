const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const tourSchema = new Schema({
  _id: { 
    type: String, 
    required: true },

  tour_type: { 
    type: String, 
    required: true, 
    trim: true },

  language: { 
    type: String, 
    required: true },

  date: [{ type: String }],

  hour: [{type: String}],

  price: {type: Number,
    required: true,},

  description: {
    type: String, 
    required: true,},

  booking: {
    type: mongoose.Types.ObjectId, 
    ref: "Booking"},

  duration: {
    type: Number, 
    required: [true, 'A tour must have a duration']},

  maxGroupSize: {
    type: Number, 
    required: [true, 'A tour must have a group size']},
 });

const TourModel = model("Tour", tourSchema);

module.exports = TourModel;



