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
const friction = 0.5;

const getRandomColor = () => {
  // Generate random values for red, green, and blue channels
  const r = Math.floor(Math.random() * 256); // 0 to 255
  const g = Math.floor(Math.random() * 256); // 0 to 255
  const b = Math.floor(Math.random() * 256); // 0 to 255

  // Create a CSS color string in the format "rgb(r, g, b)"
  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
};

const circle = (x, y, r, speed, a) => {
  const radius = r;
  let dy = speed;
  const color = getRandomColor();

  const drawCircle = () => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  };

  const updateCircle = () => {
    if (y + radius > canvas.height || y - radius < 0) {
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
  const startX = window.innerWidth / 2;
  const startY = window.innerHeight / 2;

  const drawCircle = circle(startX, startY, 60, 5, 0.2);

  const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    drawCircle();
  };

  animate();
};

init();
