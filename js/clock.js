function addZero(n) {
  if(n < 10) n = "0" + n;
  return n;
}

function updateClock() {
  let d = new Date();
  $('.clock')[0].innerHTML =
    addZero(d.getHours()) + ":" + addZero(d.getMinutes());
}

window.setInterval(updateClock, 1000);
