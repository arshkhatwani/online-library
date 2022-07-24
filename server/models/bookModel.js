const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  _id: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  publication: {
    type: String,
    default: "",
  },

  publishYear: {
    type: Number,
    default: 0,
  },
});

const bookModel = mongoose.model("books", bookSchema);
module.exports = bookModel;
