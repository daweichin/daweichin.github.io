// imports
import { randomColor } from "./utils";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const colors = [
  "#9400D3",
  "#4B0082",
  "#0000FF",
  "#00FF00",
  "#FFFF00",
  "#FF7F00",
  "#FF0000",
];

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});
let mouseDown = false;
addEventListener("mousedown", () => {
  mouseDown = true;
});
addEventListener("mouseup", () => {
  mouseDown = false;
});

// Objects
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    //rending of star
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.shadowColor = this.color;
    // c.shadowBlur = 15;
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    c.restore();
  }

  update() {
    this.draw();
  }
}
/////////////////
// Implementation

// note the order is important

let particles;

function init() {
  particles = [];

  for (let i = 0; i < 400; i++) {
    const canvasWidth = canvas.width + 300;
    const canvasHeight = canvas.height + 300;
    const x = Math.random() * canvasWidth - canvasWidth / 2;
    const y = Math.random() * canvasHeight - canvasHeight / 2;
    const radius = Math.random() * 2;
    const color = randomColor(colors);
    particles.push(new Particle(x, y, radius, color));
  }
}

const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, "#171e26");
backgroundGradient.addColorStop(1, "#3f586b");

// Animation Loop
let radians = 0;
let alpha = 1;
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = `rgba(10,10,10,${alpha})`;
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Rotate Entire Canvas
  c.save();
  c.translate(canvas.width / 2, canvas.height / 2);
  c.rotate(radians);

  particles.forEach((object) => {
    object.update();
  });
  c.restore();
  radians += 0.001;

  if (mouseDown && alpha >= 0.02) {
    alpha -= 0.01;
  } else if (!mouseDown && alpha < 1) {
    alpha += 0.0005;
  }
}

init();
animate();
