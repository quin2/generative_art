function setup() {
  // put setup code here
  var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  myCanvas.parent('myContainer');

  background('white');
  stroke(0, 255); // black pen
  noFill(); // don't fill
}

function draw() {
  rad = window.innerWidth / 8;
  pad = rad / 4;
  for(j = pad; j <= window.innerHeight + 100; j += rad){
  for(i = pad; i <= window.innerWidth + 100; i += rad){
    for(q = 0; q < 4; q++){
      noFill();
      stroke(0, 255);
      if(q == 0){
        colorMode(RGB,100);
        stroke(0, 0);
        fill(Math.floor(Math.random() * Math.floor(101)));
      }
      diff = Math.floor(Math.random() * Math.floor(8));
      diff2 = Math.floor(Math.random() * Math.floor(8));
      xpos = i + diff;
      ypos = j + diff2;
      ellipse(xpos, ypos, rad - pad , rad - pad);
    }
  }
  }
  /*
  count += 1;
  if(count > 3){
    noLoop();
  }

  max = 100 + diff;
  min = 100 - diff;
  xPos = Math.random() * (max - min) + min;
  yPos = Math.random() * (max - min) + min;
  // put drawing code here
  ellipse(xPos, yPos, 100, 100, 0);
  */
  noLoop();
}
