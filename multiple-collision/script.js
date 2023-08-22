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

const getRandomRange = (min, max) => Math.random() * (max - min) + min;

const colors = ["#227c9d", "#17c3b2", "#ffcb77", "#fef9ef", "#fe6d73"];
class Circle {
  constructor(startX, startY, r) {
    this.x = startX;
    this.y = startY;
    this.dx = getRandomRange(-2, 2);
    this.dy = getRandomRange(-2, 2);
    this.radius = r;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw() {
    // actual drawing
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update(canvas) {
    this.draw();
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0)
      this.dx = -this.dx;
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0)
      this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;
  }
}

const numOfCircles = 100;

const init = () => {
  const circles = Array.from({ length: numOfCircles }, () => {
    const radius = getRandomRange(20, 40);
    const startX = getRandomRange(radius, canvas.width - radius);
    const startY = getRandomRange(radius, canvas.height - radius);
    return new Circle(startX, startY, radius);
  });

  const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    circles.forEach((circle) => {
      circle.update(canvas);
    });
  };

  animate();
};

init();
