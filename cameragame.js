var ballX = 0
var ballSpeed = 30;

var cameraSound;

function preload(){
  cameraSound = loadSound("camera.m4a");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(50, 150, 200);
  
  fill(26, 46, 77);
  rect(0, 0, width, height);

  noStroke();
  fill(98, 161, 156);
  ellipse(ballX, 100, 100);
  
  ballX = ballX + ballSpeed;
  
  if (ballX > random(700, 2400)) {
   ballSpeed = -ballSpeed; 
  }
  
  if (ballX < random(-2000, -300)) {
   ballSpeed = -ballSpeed; 
  }
  
  fill(88, 153, 232);
  rect(0, 100, 400, 400);
  
  fill(194, 171, 132);
  rect(0, 360, 400, 400);
  
  if (mouseIsPressed) {
    fill(255);
    ellipse(random(width), random(height), random(400,500),);
    cameraSound.play();    
  }
}
