const express = require("express");
const socket = require("socket.io");
const app = express();

app.use(express.static("public"));

const server = app.listen(5000, () => {
  console.log("Server is listening on PORT 5000");
});

// Socket setup

const io = socket(server);

io.on("connection", (socket) => {
  console.log("Made a socket connection");
  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });
});
