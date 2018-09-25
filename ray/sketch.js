function setup() {
  // put setup code here
  var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  myCanvas.parent('myContainer');

  background('black');
  stroke('white'); // black pen
  strokeWeight(1);
  noFill(); // don't fill
}

count = 0;
maxSprinkles = 500;
maxMag = window.innerHeight/2;

function draw() {
  count += 1;
  if(count <= maxSprinkles){
    var v = p5.Vector.random2D();
    v.setMag(random(maxMag));

    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;

    //draw ya sprinkles x1y1x2y2
    line(v.x + cx, v.y + cy, cx,cy);
  }

  //save();
}
