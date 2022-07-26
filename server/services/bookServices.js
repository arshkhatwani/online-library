const bookModel = require("../models/bookModel");

const uploadBook = async (req, res) => {
  try {
    const _id = req.savedBookId;
    var { title, author, category, publication, publishYear } = req.body;
    publishYear = parseInt(publishYear) || 0;

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
    console.log(e.message);
    res.sendStatus(500);
  }
};

const getBooks = async (req, res) => {
  try {
    var { keyword } = req.query;
    keyword = keyword || "";

    const exp1 = { title: { $regex: `.*${keyword}.`, $options: "i" } };
    const exp2 = { author: { $regex: `.*${keyword}.`, $options: "i" } };

    const books = await bookModel.find({
      $or: [exp1, exp2],
    });

    res.status(200).json(books);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = { uploadBook, getBooks };
