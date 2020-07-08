// i have a lot more to learn about javascript
class Shrine extends Star {
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
