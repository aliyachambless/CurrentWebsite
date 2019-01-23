var yoff = 0.0;
var visible = true;

function setup() {
  canvas = createCanvas(window.outerWidth,window.innerHeight);
  background(0);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  if(visible == true){
     stroke(255, 15);
  } else {
      stroke(0);
  }
}

function draw() {
  fill(0,0,0,5);
  noFill();

  beginShape();
    
  var xoff= 0;
    
  for (var x = 0; x <= width; x += 10) {
  // Map noise value (between 0 and 1) to y-value of canvas
    var y = map(noise(xoff, yoff), 0, 1, window.innerHeight/2 - 200, window.innerHeight/2 + 200);
    // Set the vertex
    vertex(x, y); 
    xoff += 0.05;
  }
    
  //Speed of moving waves
  yoff += 0.008;
  vertex(width+15, -15);
  vertex(-15, -15);
  endShape(CLOSE);

}

function mousePressed() {
  setup();
}

function windowResized() {
  setup();
}

function show() {
    visible = true;
    setup();
}

function hide() {
    visible = false;
    setup();
}