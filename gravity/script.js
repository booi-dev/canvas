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

const acceleration = 1;
const friction = 0.99;

const getRandomColor = () => {
  // Generate random values for red, green, and blue channels
  const r = Math.floor(Math.random() * 256); // 0 to 255
  const g = Math.floor(Math.random() * 256); // 0 to 255
  const b = Math.floor(Math.random() * 256); // 0 to 255

  // Create a CSS color string in the format "rgb(r, g, b)"
  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
};

const gerRandomRange = (min, max) => Math.random() * (max - min) + min;

const circle = (x, y, r) => {
  const radius = r;
  let dy = Math.random() * (2 + 3) + 2;
  const color = getRandomColor();

  const drawCircle = () => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  };

  const updateCircle = () => {
    if (y + radius + dy > canvas.height || y - radius + dy < 0) {
      dy = -dy * friction;
    } else {
      dy += acceleration;
    }

    y += dy;
    drawCircle();
  };

  return updateCircle;
};

const init = () => {
  const circles = Array.from({ length: 550 }, () => {
    const radius = gerRandomRange(2, 5);
    const startX = gerRandomRange(0, canvas.width - radius);
    const startY = gerRandomRange(0, canvas.height - radius);
    return circle(startX, startY, radius);
  });

  const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    circles.forEach((drawCircle) => {
      drawCircle();
    });
  };

  animate();
};

init();
