const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/elibrary");
    console.log("Connected to DB");
  } catch (e) {
    console.log("Could not connect to DB");
    console.log(e);
  }
}

module.exports = { connect };
