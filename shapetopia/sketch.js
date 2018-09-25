function setup() {
  // put setup code here
  var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  myCanvas.parent('myContainer');

  background('#F7F7F2');
  noStroke(); // black pen
  noFill(); // don't fill
  angleMode(DEGREES);
}

makeShapes = 800;

function draw() {
  for(i = 0; i < makeShapes; i++){
    //define size
    size = 50;

    //get a random color
    colors = ["#5BC0BE", "#3A506B", "#1C2541", "#0B132B"];
    randomColor = random(colors);


    //get a random location
    rx = random(window.innerWidth);
    ry = random(window.innerHeight);

    ellipse(rx, ry, size, size);
    fill(randomColor);

    rotate(random(360));
    rect(rx, ry, size, size);
    fill(randomColor);

    rotate(random(360));
    triangle(rx, ry, rx + (size/2), ry + (size/2), rx + size, ry);
    fill(randomColor);

  }
  noLoop();
}
