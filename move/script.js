const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

///

let circleRadius = 50;

const drawCircle = (startPosX, startPosY) => {
  ctx.beginPath();
  ctx.arc(startPosX, startPosY, circleRadius, 0, Math.PI * 2, false);
  ctx.fillStyle = "#D9C5B2";
  ctx.fill();
  ctx.closePath();
};

let startX = 200;
let startY = 200;
let dx = 10;
let dy = 10;

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  drawCircle(startX, startY);

  if (startX + circleRadius > window.innerWidth || startX - circleRadius === 0)
    dx = -dx;

  if (startY + circleRadius > window.innerHeight || startY - circleRadius === 0)
    dy = -dy;

  startX += dx;
  startY += dy;
};

animate();
