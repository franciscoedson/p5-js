var particle1;
var particle2;


function setup() {
  createCanvas(640, 360);
  particle1 = new Particle(223, 150, 3);
  particle2 = new Particle(423, 150, 1);
}

function keyPressed(){
  console.log(particle1.vel.y + " " + particle2.vel.y);
}

function draw() {
  background(51);

  var wind = createVector(0.1, 0);

  var gravity1 = createVector(0, 0.1*particle1.mass);
  particle1.applyForce(gravity1);
  var gravity2 = createVector(0, 0.1*particle2.mass);
  particle2.applyForce(gravity2);
  
  if(mouseIsPressed){
    particle1.applyForce(wind);
    particle2.applyForce(wind);
  }



  particle1.update();
  particle1.display();
  particle1.edges();

  particle2.update();
  particle2.display();
  particle2.edges();
}
