const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const bookFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "pdf") {
    cb(null, true);
  } else {
    cb(new Error("Not a PDF File!"), false);
  }
};

const bookCoverFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg") req.body.coverFileType = "jpeg";
  else if (file.mimetype == "image/png") req.body.coverFileType = "png";

  if (
    file.mimetype.split("/")[1] === "png" ||
    file.mimetype.split("/")[1] === "jpeg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Not an Image File!"), false);
  }
};

const multerFilter = (req, file, cb) => {
  if (file.fieldname === "bookFile") return bookFilter(req, file, cb);

  if (file.fieldname === "bookCoverFile") return bookCoverFilter(req, file, cb);
};

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "bookFile") cb(null, "books");
    else if (file.fieldname === "bookCoverFile") cb(null, "bookCovers");
  },

  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];

    const bookId = req.savedBookId !== undefined ? req.savedBookId : uuidv4();
    req.savedBookId = bookId;

    cb(null, `${bookId}.${ext}`);
  },
});

const bookUpload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

module.exports = bookUpload;
