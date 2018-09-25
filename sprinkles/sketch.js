function setup() {
  // put setup code here
  var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  myCanvas.parent('myContainer');

  background('yellow');
  stroke(0, 255); // black pen
  strokeWeight(4);
  noFill(); // don't fill
}

count = 0;
maxSprinkles = 100; //number of sprinkles
sprinkleSize = 10; //sprinkleLength
height = window.innerHeight;
width = window.innerWidth;

function draw() {
  count += 1;
  if(count <= maxSprinkles){
    randomX = random(width);
    randomY = random(height);
    var v = p5.Vector.random2D();
    v.setMag(sprinkleSize);
    line(randomX, randomY, randomX + v.x, randomY + v.y);
  }
}
