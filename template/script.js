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

const colors = ["#227c9d", "#17c3b2", "#ffcb77", "#fef9ef", "#fe6d73"];

const getRandomRange = (min, max) => Math.random() * (max - min) + min;

const circle = (x, y, r) => {
  let radius = r;

  const color = colors[Math.floor(Math.random() * colors.length)];

  const drawCircle = () => {
    // actual drawing
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  };

  const updateCircle = () => {
    drawCircle();
  };

  return updateCircle;
};

const init = () => {
  const radius = 60;
  const startX = canvas.width / 2;
  const startY = canvas.height / 2;

  const drawCircle = circle(startX, startY, radius);

  const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    drawCircle();
  };

  animate();
};

init();
