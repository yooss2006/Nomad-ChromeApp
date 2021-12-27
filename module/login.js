const login = document.querySelector(".main .login");
const loginInput = login.querySelector("form .pwd");
const loginBtn = login.querySelector("form .btn-pwd");
let userPwd = 1234;
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
}
loginBtn.addEventListener("submit", onLoginSubmit);
