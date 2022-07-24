const bookModel = require("../models/bookModel");

const uploadBook = async (req, res) => {
  try {
    const _id = req.savedBookId;
    var { title, author, category, publication, publishYear } = req.body;

    const newData = new bookModel({
      _id,
      title,
      author,
      category,
      publication,
      publishYear,
    });

    await newData.save();

    res.status(201).json(newData);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = { uploadBook };
