const express = require("express");

const app = express();

app.use(express.static("public"));

const server = app.listen(5000, () => {
  console.log("Server is listening on PORT 5000");
});
