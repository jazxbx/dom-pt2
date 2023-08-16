"use srict";

// BOX//

const isToggle = document.querySelector(".box-toggle");

isToggle.addEventListener("click", () => {
  isToggle.classList.toggle("blue");
});

// MIRROR//

const mirrorInput = document.querySelector(".mirror-input");
console.log(mirrorInput);

mirrorInput.addEventListener("input", () => {
  const mirroredText = document.querySelector("#mirror p");
  mirroredText.textContent = mirrorInput.value;
});

//COUNTER//

const plus = document.querySelector("#plus");
const counter = document.querySelector("#display-count");
const minus = document.querySelector("#minus");
let count = 0;

plus.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

minus.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

//RACE//

const car = document.querySelector("#car");
let modifier = 0; // px value of movement of car

document.addEventListener("keydown", (event) => {
  //using destructuring in this way allows you to store the style element without having to continually reference it's parent object.
  const { style } = car; // the same as writing const style = car.style;

  if (event.key === "ArrowRight") {
    modifier += 5;
    style.marginLeft = modifier + "px"; // When you concatenate a value with a string in JavaScript, the value is automatically coerced into a string. This process is called type coercion.
  } else if (event.key === "ArrowLeft") {
    modifier -= 5;
    style.marginLeft = `${modifier}px`;
  }
});

// document.addEventListener("keydown", (event) => {
//   const { style } = car;
//   if (event.key === "ArrowRight") {
//     modifier += 5;
//     style.marginLeft = `${parseInt(style.marginLeft) + modifier}px`;
//   } else if (event.key === "ArrowLeft") {
//     modifier -= 5;
//     style.marginLeft = `${parseInt(style.marginLeft) - modifier}px`;
//   }
//   console.log("New margin-left:", style.marginLeft);
// });

// StOPWATCH

const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});
resetBtn.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  timeDisplay.textContent = "00:00:00";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${secs} `;
}
// adds additional 0 to the display when value is just 1 number.
function pad(unit) {
  return ("0" + unit).length > 2 ? unit : "0" + unit;
}
