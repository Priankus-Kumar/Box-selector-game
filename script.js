const button = document.querySelector(".start");
const timer = document.querySelector(".timer");
const score = document.querySelector(".score");
const randombox = document.querySelector(".randombox");
const gameover = document.querySelector(".gameover");

let points = 0;
let timers = 0;
let out;
function pointerr() {
  randombox.addEventListener("click", function () {
    points += 1;
    score.textContent = points;
  });
}
button.addEventListener("click", function () {
  clearInterval(out);

  points = 0;
  timers = 0;
  timer.textContent =timers;
  score.textContent = points;
  gameover.style.display = "none";
  randombox.style.display = "block";

  out = setInterval(() => {
    timers += 1;

    timer.textContent = timers;
    const axisx = Math.floor(Math.random() * 100);
    const axisxy = Math.floor(Math.random() * 100);
    randombox.style.top = `${axisx}%`;
    randombox.style.right = `${axisxy}%`;
    pointerr();
  }, 1000);

  setTimeout(() => {
    clearInterval(out);
    randombox.style.display = "none";
    gameover.style.display = "flex";
  }, 10000);
});
