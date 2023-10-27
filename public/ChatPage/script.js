const socket = io();

const username = localStorage.getItem("username");
const send_btn = document.getElementById("send-btn");
const chat_container = document.getElementById("chat-container");

// Sending message
send_btn.addEventListener('click', (e) => {
  e.preventDefault();
  const message = document.getElementById("message").value.trim();
  const data = {
    username,
    message
  } 
  // sends the message to io
  socket.emit("message", data);
  // this function renders message on ui
  addMessage(data);
})

socket.on("message", (data) => {
  if (data.username !== username) {
    recieveMessage(data)
  }
})


function addMessage(data) {
  const msg = document.createElement("div");
  msg.classList.add("sent")
  msg.innerText = `${data.message}`
  chat_container.append(msg)
  document.getElementById("message").value = ""
}

function recieveMessage(data) {
  const msg = document.createElement("div");
  msg.classList.add("recieve")
  msg.innerHTML = `${data.message} <span class="user-name">${data.username}</span>`
  chat_container.append(msg)
  document.getElementById("message").value = ""
}