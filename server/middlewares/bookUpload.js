const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "pdf") {
    cb(null, true);
  } else {
    cb(new Error("Not a PDF File!"), false);
  }
};

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "books");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const bookId = uuidv4();
    cb(null, `${bookId}.${ext}`);
  },
});

const bookUpload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

module.exports = bookUpload;
