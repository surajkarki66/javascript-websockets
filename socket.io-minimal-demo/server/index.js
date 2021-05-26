// Socket.io implementations

const http = require("http").createServer();
const io = require("socket.io")(http, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("A user is connected");
  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", `${socket.id.substr(0, 2)} said  ${message}`);
  });
});

http.listen(8080, () => console.log("Server is running in PORT 8080"));

// // Regular websocket
// const WebSocket = require("ws");
// const server = new WebSocket.Server({ port: "8080" });

// server.on("connection", (socket) => {
//   console.log("Successfully handshake with client");
//   console.log("Listening income message");
//   socket.on("message", (message) => {
//     console.log("Message get from client");
//     console.log("Sending message back to client");
//     socket.send(`Roger that! ${message}`);
//   });
// });
