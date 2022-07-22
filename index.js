// Import stylesheets
import './style.css';

var ms = 0,
  s = 0,
  m = 0;
var timer;

var stopwatchEL = document.querySelector('.stopwatch');
const lapsContainer = document.querySelector('#laps');

document.getElementById('btnStart').addEventListener('click', () => start());
document.getElementById('btnPause').addEventListener('click', () => pause());
document.getElementById('btnStop').addEventListener('click', () => stop());
document
  .getElementById('btnRestart')
  .addEventListener('click', () => restart());
document.getElementById('btnLaps').addEventListener('click', () => lap());
document
  .getElementById('btnResetlaps')
  .addEventListener('click', () => resetLaps());

function start() {
  if (!timer) {
    timer = setInterval(run, 10);
  }
}
function run() {
  stopwatchEL.textContent = getTimer();
  ms++;
  if (ms == 100) {
    ms = 0;
    s++;
  }
  if (s == 60) {
    s = 0;
    m++;
  }
}

function pause() {
  stopTimer();
}
function stop() {
  stopTimer();
  s = 0;
  ms = 0;
  m = 0;

  stopwatchEL.textContent = getTimer();
}
function stopTimer() {
  clearInterval(timer);
  timer = false;
}
function restart() {
  stop();
  start();
}

function getTimer() {
  return (
    (m < 10 ? '0' + m : m) +
    ':' +
    (s < 10 ? '0' + s : s) +
    ':' +
    (ms < 10 ? '0' + ms : ms)
  );
}
function lap() {
  if (timer) {
    const li = document.createElement('li');
    li.innerText = getTimer();
    lapsContainer.appendChild(li);
  }
}
function resetLaps() {
  lapsContainer.innerHTML = '';
}
