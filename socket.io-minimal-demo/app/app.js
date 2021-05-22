// Regular websocket

const socket = new WebSocket("ws://localhost:8080");
console.log("Request connection handshake to server");

// Listen for message
socket.onmessage = ({ data }) => {
  console.log(`Message from server ${data}`);
};

document.querySelector("button").onclick = () => {
  console.log("Send message to server");
  socket.send("hello");
};
