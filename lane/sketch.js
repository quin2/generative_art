function setup() {
  // put setup code here
  var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  myCanvas.parent('myContainer');

  background('#FFD2FC');
  stroke('#DDFFF7'); // black pen
  strokeWeight(5);
  noFill(); // don't fill
}

lineSpace = window.innerWidth / 100;
variable = 8;

function draw() {
  stop = random(0, window.innerHeight);
  for(i = 0; i < window.innerWidth; i+=lineSpace){
    stop += random(-variable, variable);
    line(i, 0, i, stop);
    line(i, stop + lineSpace, i, window.innerHeight);
  }
  noLoop();
}
