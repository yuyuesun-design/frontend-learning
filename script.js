const button = document.querySelector("#helloButton");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
  message.textContent = "你点击了按钮！";
});