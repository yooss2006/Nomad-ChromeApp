function getTime() {
  const contTime = document.querySelector(".watch .cont-time");
  const contHour = document.querySelector(".watch .cont-hour");
  const widgtWatch = document.querySelector(".widgtWatch");

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
    hour = (hour - 12 + "").padStart(2, "0");
  } else {
    if (hour === 0) {
      ampm = "자정";
    } else {
      ampm = "오전";
    }
    hour = (hour + "").padStart(2, "0");
  }
  contHour.innerHTML = hour;
  contTime.innerHTML = `${ampm} ${minute}분  ${seconds} 초`;
  widgtWatch.innerHTML = `${ampm} ${hour}시 ${minute}분  ${seconds} 초`;
}
setInterval(getTime, 1000);
