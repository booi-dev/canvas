const canvas = document.querySelector("#canvas");

const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
const scrollbarHeight =
  window.innerHeight - document.documentElement.clientHeight;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(scrollbarWidth);

const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(400, 300, 60, 0, Math.PI * 2, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
