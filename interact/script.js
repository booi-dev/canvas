const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

///

function getRandomColor() {
  // Generate random values for red, green, and blue channels
  const r = Math.floor(Math.random() * 256); // 0 to 255
  const g = Math.floor(Math.random() * 256); // 0 to 255
  const b = Math.floor(Math.random() * 256); // 0 to 255

  // Create a CSS color string in the format "rgb(r, g, b)"
  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
}

let mouse = {};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const minSize = 5;
const maxGrowSize = 80;
const numOfCircles = 1000;
const growSpeed = 2;

const circle = (x, y) => {
  let radius = Math.random() * (10 + 30) + 10;
  let dx = (Math.random() - 0.5) * 2;
  let dy = (Math.random() - 0.5) * 2;

  const color = getRandomColor();

  const drawCircle = () => {
    // updating
    if (x + radius > window.innerWidth || x - radius < 0) dx = -dx;
    if (y + radius > window.innerHeight || y - radius < 0) dy = -dy;

    x += dx;
    y += dy;

    // interact
    const originalRadius = radius;
    if (
      mouse.x - x < 50 &&
      mouse.x - x > -50 &&
      mouse.y - y < 50 &&
      mouse.y - y > -50
    ) {
      if (radius < maxGrowSize) radius += growSpeed;
    } else if (radius > minSize) {
      radius -= growSpeed;
    }

    // actual drawing
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  };

  return drawCircle;
};

const genRandX = () => Math.random() * window.innerWidth;
const genRandY = () => Math.random() * window.innerHeight;

const circles = Array.from({ length: numOfCircles }, () => {
  const startX = genRandX();
  const startY = genRandY();
  return circle(startX, startY);
});

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  circles.forEach((drawCircle) => {
    drawCircle();
  });
};

animate();
