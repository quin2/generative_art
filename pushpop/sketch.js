function setup() {
  // put setup code here
  var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  myCanvas.parent('myContainer');

  background('white');
  noStroke();
  noFill(); // don't fill
}

loopCount = 0;
var max = 60;
start = window.innerHeight;
step = 0.95;
old = start;

block = window.innerHeight / 2;

function draw() {
  loopCount++;
  if(loopCount < max){
    //picks random color
    colors = ["#FF0000", "#E2571E", "#FF7F00", "#FFFF00", "#00FF00", "#96bf33", "#0000FF", "#4B0082", "#8B00FF", "#ffffff"];
    randomColor = random(colors);
    fill(randomColor);

    //redefines radius by scaling it down
    push();
    old = start;
    start = start * step;

    //see if we should pop or not...can change this to adjust 'odds'
    if(random(0,2) == 1){
      start = old;
      old = start * (1 + step);
    }

    //pick any random point within old circle
    v1 = p5.Vector.random2D();
    v1.setMag(random(0, old));
    ellipse(v1.x + block, v1.y + block, start, start);
  }
}

//saves webshot...make part of control panel???
function keyPressed(x) {
  save();
}
