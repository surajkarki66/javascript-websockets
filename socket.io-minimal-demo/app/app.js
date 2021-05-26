// Using socket.io
const socket = io("ws://localhost:8080");

socket.on("message", (text) => {
  const el = document.createElement("li");
  el.innerHTML = text;
  document.querySelector("ul").appendChild(el);
});

document.querySelector("button").onclick = () => {
  const text = document.querySelector("input").value;
  socket.emit("message", text);
};
// // Regular websocket

// const socket = new WebSocket("ws://localhost:8080");
// console.log("Request connection handshake to server");

// // Listen for message
// socket.onmessage = ({ data }) => {
//   console.log(`Message from server ${data}`);
// };

// document.querySelector("button").onclick = () => {
//   console.log("Send message to server");
//   socket.send("hello");
// };
