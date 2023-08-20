const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

let mouse = {};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const minSize = 5;
const maxGrowSize = 60;
const numOfCircles = 1;
const growSpeed = 2;
const colors = ["#227c9d", "#17c3b2", "#ffcb77", "#fef9ef", "#fe6d73"];

const circle = (x, y) => {
  let radius = Math.random() * (20 + 200) + 2;

  const color = colors[Math.floor(Math.random() * colors.length)];

  const drawCircle = () => {
    // actual drawing
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  };

  return drawCircle;
};

const init = () => {
  const genRandX = () => Math.random() * window.innerWidth;
  const genRandY = () => Math.random() * window.innerHeight;

  const startX = 200;
  const startY = genRandY();

  const drawCircle = circle(startX, startY);

  drawCircle();
};

init();
