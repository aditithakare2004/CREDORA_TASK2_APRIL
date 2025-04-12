let timerDisplay = document.querySelector(".timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
} // <-- Added missing closing brace here

function pad(unit) {
  return unit.toString().padStart(2, "0");
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerDisplay.textContent = timeToString(elapsedTime);
  }, 1000);
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerDisplay.textContent = "00:00:00";
  elapsedTime = 0;
  startBtn.disabled = false;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);