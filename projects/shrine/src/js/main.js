// imports
import utils from "./utils";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects
class Star {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.velocity = {
      x: (Math.random() - 0.5) * 8,
      y: 3,
    };

    this.friction = 0.3;
    this.gravity = 1.5;
  }

  draw() {
    //rending of star
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.shadowColor = `rgba(277, 234, 239`;
    c.shadowBlur = 20;
    c.fill();
    c.closePath();
    c.restore();
  }

  update() {
    this.draw();

    // When ball hits bottom screen
    if (this.y + this.radius + this.velocity.y > canvas.height - groundHeight) {
      // friction multiplier
      this.velocity.y = -this.velocity.y * this.friction;
      this.shatter();
    } else {
      //gravity
      this.velocity.y += this.gravity;
    }

    // ball hits side screen
    if (
      this.x + this.radius + this.velocity.x > canvas.width ||
      this.x - this.radius <= 0
    ) {
      this.velocity.x = -this.velocity.x * this.friction;
      this.shatter();
    }

    this.x += 2 * this.velocity.x;
    this.y += this.velocity.y;
  }

  shatter() {
    console.log("shatter");

    // make sure star gets smaller each time it shatters
    // runtime bug: also means that the radius has to be divisible by 3
    this.radius -= 3;
    for (let i = 0; i < 6; i++) {
      // this refers to Star object as we are inside Star class
      miniStars.push(new MiniStar(this.x, this.y, 2));
    }
  }
}

// i have a lot more to learn about javascript
class MiniStar extends Star {
  // i needed x,y,radius,color in both super and constructor?
  constructor(x, y, radius, color) {
    // super calls the parent constructor
    super(x, y, radius, color);

    this.velocity = {
      x: utils.randomIntFromRange(-5, 5),
      y: utils.randomIntFromRange(-15, 15),
    };
    this.friction = 0.3;
    this.gravity = 0.6;

    // time to live
    this.ttl = 300;
    this.opacity = 1;
  }

  draw() {
    //rending of star
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = `rgba(277, 234, 239, ${this.opacity})`;
    c.shadowColor = `rgba(277, 234, 239`;
    c.shadowBlur = 20;
    c.fill();
    c.closePath();
    c.restore();
  }

  update() {
    this.draw();

    // When ball hits bottom screen
    if (this.y + this.radius + this.velocity.y > canvas.height - groundHeight) {
      // friction multiplier
      this.velocity.y = -this.velocity.y * this.friction;
    } else {
      //gravity
      this.velocity.y += this.gravity;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.ttl -= 1;

    // minut by a ratio
    this.opacity -= 3 / this.ttl;
  }
}

function createMountainRange(mountainAmount, height, color) {
  for (let i = 0; i < mountainAmount; i++) {
    const mountainWidth = canvas.width / mountainAmount;

    c.beginPath();
    // create a triangle
    c.moveTo(i * mountainWidth, canvas.height);
    c.lineTo(i * mountainWidth + mountainWidth + 350, canvas.height);
    c.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height);
    c.lineTo(i * mountainWidth - 350, canvas.height);
    c.fillStyle = color;
    c.fill();
    c.closePath;
  }
}

function createQuad() {
  c.beginPath();

  c.moveTo(0, canvas.height - groundHeight);
  c.lineTo(200, canvas.height - 100 - groundHeight);
  c.lineTo(canvas.width - 200, canvas.height - 100 - groundHeight);
  c.lineTo(canvas.width, canvas.height - groundHeight);
  c.lineTo(0, canvas.height - groundHeight);

  c.fillStyle = "grey";
  c.fill();
  c.closePath;
}

function createShrine(x, y) {
  c.save();
  const half = x;

  // horizontal poles
  c.beginPath();
  c.ellipse(
    half,
    canvas.height - 170 - y,
    100,
    20,
    0,
    Math.PI - Math.sin(Math.PI / 2),
    Math.sin(Math.PI / 2),
    true
  );
  c.lineWidth = 2;
  c.strokeStyle = "black";
  c.stroke();

  c.beginPath();
  c.moveTo(half - 45, canvas.height - 135 - y);
  c.lineTo(half + 45, canvas.height - 135 - y);
  c.strokeStyle = "red";
  c.stroke();
  c.beginPath();
  c.moveTo(half - 45, canvas.height - 148 - y);
  c.lineTo(half + 45, canvas.height - 148 - y);
  c.strokeStyle = "red";
  c.stroke();

  // vertical poles
  c.beginPath();
  c.moveTo(half + 25, canvas.height - groundHeight - y);
  c.lineTo(half + 25, canvas.height - 149 - y);
  c.strokeStyle = "red";
  c.stroke();

  c.beginPath();
  c.moveTo(half - 25, canvas.height - groundHeight - y);
  c.lineTo(half - 25, canvas.height - 149 - y);
  c.strokeStyle = "red";
  c.stroke();

  c.restore();
}
/////////////////
// Implementation

// note the order is important

const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, "#171e26");
backgroundGradient.addColorStop(1, "#3f586b");

let stars;
let backgroundStars;
let miniStars;
let ticker = 0;
let randomSpawnRate = 75;
let groundHeight = 100;

function init() {
  stars = [];
  miniStars = [];
  backgroundStars = [];

  for (let i = 0; i < 150; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 3;
    backgroundStars.push(new Star(x, y, radius, "#e3eaef"));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  // c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = backgroundGradient;
  c.fillRect(0, 0, canvas.width, canvas.height);

  backgroundStars.forEach((backgroundStars) => {
    backgroundStars.draw();
  });

  // use canvas.height for dynamic scaling
  createMountainRange(2, canvas.height - 200, "#2b3843");
  createMountainRange(3, canvas.height - 500, "#384551");
  // createMountainRange(3, canvas.height - 400, "#26333e");

  createQuad();
  createShrine(canvas.width / 2, 100);

  // create floor
  c.fillStyle = "#182028";
  c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

  stars.forEach((star, index) => {
    star.update();
    if (star.radius == 0) {
      stars.splice(index, 1);
    }
  });

  miniStars.forEach((miniStar, index) => {
    miniStar.update();
    if (miniStar.ttl == 0) {
      miniStars.splice(index, 1);
    }
  });

  ticker++;

  if ((ticker / 2) % randomSpawnRate == 0) {
    const radius = 12;
    const x = Math.max(radius, Math.random() * canvas.width - radius);
    stars.push(new Star(x, -100, 12, "white"));
    randomSpawnRate = utils.randomIntFromRange(100, 250);
  }
}

init();
animate();
