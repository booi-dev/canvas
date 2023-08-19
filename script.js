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

for (let i = 0; i < 10; i++) {
  ctx.beginPath();
  ctx.arc(200 + i * 100, 500, 30, 0, Math.PI * 2, false);
  ctx.fillStyle = "white";
  ctx.stroke();
  ctx.closePath();
}
