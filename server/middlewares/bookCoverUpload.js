const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const multerFilter = (req, file, cb) => {
  if (
    file.mimetype.split("/")[1] === "png" ||
    file.mimetype.split("/")[1] === "jpeg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Not an Image File!"), false);
  }
};

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "bookCovers");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const bookId = uuidv4();
    cb(null, `${bookId}.${ext}`);
  },
});

const bookCoverUpload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

module.exports = bookCoverUpload;
