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

const circle = (x, y, r, speed) => {
  const radius = r;
  let dy = speed;
  const color = colors[Math.floor(Math.random() * colors.length)];

  const drawCircle = () => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  };

  const updateCircle = () => {
    if (y + radius > canvas.height || y - radius < 0) {
      dy = -dy;
    }
    y += dy;
    drawCircle();
  };

  return updateCircle;
};

const init = () => {
  const startX = window.innerWidth / 2;
  const startY = window.innerHeight / 2;

  const drawCircle = circle(startX, startY, 60, 5);

  const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    drawCircle();
  };

  animate();
};

init();
