const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const acceleration = 0.2;
const friction = 0.2;

const getRandomColor = () => {
  // Generate random values for red, green, and blue channels
  const r = Math.floor(Math.random() * 256); // 0 to 255
  const g = Math.floor(Math.random() * 256); // 0 to 255
  const b = Math.floor(Math.random() * 256); // 0 to 255

  // Create a CSS color string in the format "rgb(r, g, b)"
  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
};

const getRandomRange = (min, max) => Math.random() * (max - min) + min;

const circle = (x, y, r) => {
  const radius = r;
  let dy = getRandomRange(1 / 10000000000, 1 / 10000000000);
  let dx = getRandomRange(-2, 2);
  const color = getRandomColor();

  const drawCircle = () => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  };

  const updateCircle = () => {
    if (x + radius + dx > canvas.width || x - radius + dx < 0) dx = -dx;

    if (y + radius + dy > canvas.height || y - radius + dy < 0) {
      dy = -dy;
    } else {
      dy += acceleration;
    }

    x += dx;
    y += dy;
    drawCircle();
  };

  return updateCircle;
};

const init = () => {
  const circles = Array.from({ length: 100 }, () => {
    const radius = getRandomRange(10, 30);
    const startX = getRandomRange(radius, canvas.width - radius);
    const startY = getRandomRange(radius, canvas.height - radius);
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

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("click", () => {
  init();
});
