const bg = document.querySelector(".cont-bg");
const contWatch = document.querySelector(".main .watch");

let toggle_bg = false;

function bgColorChange() {
  bg.classList.toggle("show-bg");
  toggleWatch.classList.toggle("hide");
  contWatch.classList.toggle("hide");
  login.classList.toggle("hide");
  toggle_bg = !toggle_bg;
}

bg.addEventListener("click", bgColorChange);
