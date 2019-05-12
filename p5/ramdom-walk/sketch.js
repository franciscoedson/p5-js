var w;

function setup() {
  createCanvas(640, 600);
  w = new Walker

}

function draw() {
  background(52);
  w.update();
  w.displey();
}

function Walker() {
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(0, 0);


  this.update = function () {
    var mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.normalize();
    // this.acc.mult(random(-5, 5));
    this.acc.setMag(0.1);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.displey = function () {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48)
  }
}