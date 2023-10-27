const joinBtn = document.getElementById("join-btn");
joinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  console.log(name)
  if (name.length !== 0) {
    localStorage.setItem("username", name)
    window.location.href = "./ChatPage/index.html";
  }
  else {
    alert("Please Enter a valid Name")
  }
})