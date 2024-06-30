console.log("bye world");
const registerBtn = document.getElementById("register");
const container = document.getElementById("container");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
  console.log("clikced");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
  console.log("clikced");
});
