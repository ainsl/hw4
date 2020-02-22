function setup() {
  createCanvas(600, 600);
}

  function zombie(x, y) {
  noStroke();
  fill(255, 154, 185); // pink
  rect(x+5, y, 20, 20); // brain
  
  noStroke();
  fill(168, 92, 79);
  rect(x, y+40, 25, 50); // torso
  
  fill(135, 168, 111); // green
  rect(x+25, y, 20, 40); // head
  rect(x+5, y+20, 20, 20); // head
  rect(x+15, y+50, 40, 10); // arm
  rect(x+5, y+150, 25, 10); // foot
  
  fill(166, 149, 166);
  rect(x, y+90, 20, 60); // leg
  
  fill(217, 69, 59);
  rect(x+35, y+15, 5, 5); // eye
  
  fill(0);
  rect(x+30, y+25, 15, 10); // mouth

  }


function draw() {
  background(220);
  
  zombie(10, mouseY);
  
}

//   noStroke();
//   fill(255, 154, 185); // pink
//   rect(10, 0, 20, 20); // brain
  
//   noStroke();
//   fill(168, 92, 79);
//   rect(5, 40, 25, 50); // torso
  
//   fill(135, 168, 111); // green
//   rect(30, 0, 20, 40); // head
//   rect(10, 20, 20, 20); // head
//   rect(20, 50, 40, 10); // arm
//   rect(10, 150, 25, 10); // foot
  
//   fill(166, 149, 166);
//   rect(5, 90, 20, 60); // leg
  
//   fill(217, 69, 59);
//   rect(40, 15, 5, 5); // eye
  
//   fill(0);
//   rect(35, 25, 15, 10); // mouth
