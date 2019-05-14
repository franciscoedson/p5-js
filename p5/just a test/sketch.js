function setup() {
  createCanvas(windowWidth, windowHeight);
  color(54);
}

var px;
var py;
var s = 20;
var c;

function draw() {
  
  for (px=0; px<=windowWidth; px+=20) {
    for (py=0; py<=windowHeight; py+=20){
      ellipse(px, py, s, s);
      fill(random(0, 255),255, 25, 50);
      noStroke();
    }

  }
  
 
}