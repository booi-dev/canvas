const canvas = document.querySelector("#canvas");

const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
const scrollbarHeight =
  window.innerHeight - document.documentElement.clientHeight;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(scrollbarWidth);

const ctx = canvas.getContext("2d");

// ctx.fillStyle = "white";
// ctx.fillRect(100, 100, 100, 100);

// Line

// ctx.beginPath();
// ctx.moveTo(100, 300);
// ctx.lineTo(250, 300);
// ctx.lineTo(250, 400);
// ctx.strokeStyle = "white";
// ctx.stroke();

// arc
// Draw the circle

// ctx.beginPath();
// ctx.arc(200, 300, 60, 0, Math.PI * 2, false);
// ctx.fillStyle = "white";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(400, 300, 60, 0, Math.PI * 2, false);
// ctx.fillStyle = "white";
// ctx.stroke();
// ctx.closePath();

const randomInRange = (min, max) => Math.random() * (max - min) + min;
const randomVal = (value) => Math.random() * value;

function getRandomColor() {
  // Generate random values for red, green, and blue channels
  const r = Math.floor(Math.random() * 256); // 0 to 255
  const g = Math.floor(Math.random() * 256); // 0 to 255
  const b = Math.floor(Math.random() * 256); // 0 to 255

  // Create a CSS color string in the format "rgb(r, g, b)"
  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
}

for (let i = 0; i < 500; i++) {
  const rand1 = randomVal(window.innerWidth);
  const rand2 = randomVal(window.innerHeight);
  const randRadius = randomInRange(5, 40);

  ctx.beginPath();
  ctx.strokeStyle = getRandomColor();
  ctx.arc(rand1, rand2, randRadius, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.closePath();
}
