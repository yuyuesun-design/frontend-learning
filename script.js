const button = document.querySelector("#helloButton");
const message = document.querySelector("#message");
const card = document.querySelector("#aboutCard");

button.addEventListener("click", function () {
  message.textContent = "你点击了按钮！";
  card.classList.toggle("highlight");
});