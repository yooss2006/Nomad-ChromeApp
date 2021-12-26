const watch = document.querySelector(".watch .cont-time");
const contHour = document.querySelector(".watch .cont-hour");
function getTime() {
  const time = new Date();
  let hour = time.getHours();
  let minute = (time.getMinutes() + "").padStart(2, "0");
  let seconds = (time.getSeconds() + "").padStart(2, "0");
  let ampm = "";
  if (hour >= 12) {
    if (hour === 12) {
      ampm = "정오";
    } else {
      ampm = "오후";
    }
  } else {
    if (hour === 0) {
      ampm = "자정";
    } else {
      ampm = "오전";
    }
    hour = (time.getHours() + "").padStart(2, "0");
  }
  contHour.innerHTML = hour;
  watch.innerHTML = `${ampm} ${minute}분  ${seconds} 초`;
}
setInterval(getTime, 1000);
