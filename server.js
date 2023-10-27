
// importing Express
const express = require('express');

// Creating an express app
const app = express();

// Making server using http and express
const server = require("http").Server(app)

// Integrating server with socket
const io = require("socket.io")(server)

//  io coing from server
io.on("connection",(socket)=>{
  console.log("Connection Established", socket.id)

  // If user sending message
  socket.on("message", (data) => {
    // Gives message to all sockets connected
    io.emit("message", data)
  })
  // socket.on("disconnect", () => {
  //   alert("user left chat",socket.id)
  // })
})

// Shows the index.html file
app.use(express.static("public"))

const PORT = 3000;

server.listen(PORT, () => {
  console.log("Server running on port "+ PORT)
})