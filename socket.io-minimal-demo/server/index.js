// Regular websocket
const WebSocket = require("ws");
const server = new WebSocket.Server({ port: "8080" });

server.on("connection", (socket) => {
  console.log("Successfully handshake with client");
  console.log("Listening income message");
  socket.on("message", (message) => {
    console.log("Message get from client");
    console.log("Sending message back to client");
    socket.send(`Roger that! ${message}`);
  });
});
