const canvas = document.querySelector("#canvas");

const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
const scrollbarHeight =
  window.innerHeight - document.documentElement.clientHeight;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(scrollbarWidth);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(100, 100, 100, 100);

// Line

ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(250, 300);
ctx.lineTo(250, 400);
ctx.strokeStyle = "white";
ctx.stroke();

// arc
// Draw the circle
ctx.beginPath();
ctx.arc(200, 300, 60, 0, Math.PI * 2, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(400, 300, 60, 0, Math.PI * 2, false);
ctx.fillStyle = "white";
ctx.stroke();
ctx.closePath();

const randomInRange = (min, max) => Math.random() * (max - min) + min;

for (let i = 0; i < 10; i++) {
  const rand1 = randomInRange(100, 1000);
  const rand2 = randomInRange(100, 1000);
  const randRadius = randomInRange(20, 60);

  ctx.beginPath();
  ctx.arc(rand1, rand2, randRadius, 0, Math.PI * 2, false);
  ctx.fillStyle = "white";
  ctx.stroke();
  ctx.closePath();
}
