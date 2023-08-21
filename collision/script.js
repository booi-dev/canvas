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

const getDistance = (x1, y1, x2, y2) => {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(xDistance ** 2 + yDistance ** 2);
};

const colors = ["#227c9d", "#17c3b2", "#ffcb77", "#fef9ef", "#fe6d73"];

const circle = (x, y, r, direction) => {
  let radius = r;
  let dx = direction;

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
    if (x + radius > canvas.width || x - radius < 0) dx = -dx;

    x += dx;
    drawCircle();
  };

  return updateCircle;
};

const init = () => {
  const radius = 60;
  // const startX = canvas.width / 2;
  const startY = canvas.height - radius;

  const drawCircle1 = circle(radius, startY, radius, 5);
  const drawCircle2 = circle(canvas.width - radius, startY, radius, -5);

  const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    drawCircle1();
    drawCircle2();
  };

  animate();
};

init();
