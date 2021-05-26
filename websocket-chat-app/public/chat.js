// Make connection
const socket = io.connect("http://localhost:5000");

//Query DOM
const message = document.getElementById("message");
const handle = document.getElementById("handle");
const btn = document.getElementById("send");
const output = document.getElementById("output");

// Emit events
btn.addEventListener("click", () => {
  socket.emit("chat", { message: message.value, handle: handle.value });
});

// Listening for an event
socket.on("chat", (data) => {
  output.innerHTML +=
    "<p><strong>" + data.handle + ":<strong>" + data.message + "</p>";
});
