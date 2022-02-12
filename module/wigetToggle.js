(() => {
  const bg = document.querySelector(".cont-bg");
  const close = document.querySelector(".close");

  let toggle_bg = false;

  function wigetToggle() {
    const watch = document.querySelector(".main .watch");
    const widgt = document.querySelector(".widgt");
    bg.classList.toggle("show-bg");
    watch.classList.toggle("hide");
    widgt.classList.toggle("hide");
    toggle_bg = !toggle_bg;
  }

  bg.addEventListener("click", wigetToggle);
  close.addEventListener("click", wigetToggle);
})();
