const express = require("express");
const path = require("path");
const app = express();

const PORT = 9090;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
