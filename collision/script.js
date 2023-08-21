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

// const circle = (startX, startY, r, direction) => {
//   let x = startX;
//   let y = startY;
//   let radius = r;
//   let dx = direction;

//   const color = colors[Math.floor(Math.random() * colors.length)];

//   const drawCircle = () => {
//     // actual drawing
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     ctx.fillStyle = color;
//     ctx.fill();
//     ctx.closePath();
//   };

//   const update = () => {
//     if (x + radius > canvas.width || x - radius < 0) dx = -dx;

//     x += dx;
//     drawCircle();
//   };

//   return { x, y, draw: update };
// };

class Circle {
  constructor(startX, startY, r, direction) {
    this.x = startX;
    this.y = startY;
    this.radius = r;
    this.dx = direction;
    this.color = colors[Math.floor(Math.random() * colors.length)];
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
  // const startX = canvas.width / 2;
  const startX1 = radius;
  const startY1 = canvas.height - radius;

  const startX2 = canvas.width - radius;
  const startY2 = canvas.height - radius;

  const circle1 = new Circle(startX1, startY1, radius, 5);
  const circle2 = new Circle(startX2, startY2, radius, -5);

  const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    circle1.update(canvas);
    circle1.draw(ctx);

    circle2.update(canvas);
    circle2.draw(ctx);

    const distance = getDistance(circle1.x, circle1.y, circle2.x, circle2.y);

    if (distance < circle1.radius + circle2.radius) {
      circle1.dx = -circle1.dx;
      circle2.dx = -circle2.dx;
    }
  };

  animate();
};

init();
