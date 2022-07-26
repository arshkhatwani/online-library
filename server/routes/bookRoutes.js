const express = require("express");
const bookUpload = require("../middlewares/bookUpload");
const {
  uploadBook,
  getBooks,
  getBookById,
} = require("../services/bookServices");
const router = express.Router();

router.post(
  "/upload",
  bookUpload.fields([
    { name: "bookFile", maxCount: 1 },
    { name: "bookCoverFile", maxCount: 1 },
  ]),
  uploadBook
);

router.get("/", getBooks);

router.get("/:id", getBookById);

module.exports = router;
