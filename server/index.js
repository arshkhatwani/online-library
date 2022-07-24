const port = 3001;
const express = require("express");
const app = express();
const db = require("./db.config");
const bookRoutes = require("./routes/bookRoutes");

db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/public/bookcovers", express.static("bookCovers"));
app.use("/public/books", express.static("books"));

app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
