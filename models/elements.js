const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const Element = mongoose.model("Element", elementSchema);

module.exports = Element;
