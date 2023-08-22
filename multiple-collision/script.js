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
class Circle {
  constructor(startX, startY, r, direction) {
    this.x = startX;
    this.y = startY;
    this.radius = r;
    this.dx = direction;
    this.colors = ["#227c9d", "#17c3b2", "#ffcb77", "#fef9ef", "#fe6d73"];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  draw(ctx) {
    // actual drawing
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update(canvas) {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    this.x += this.dx;
  }
}

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
