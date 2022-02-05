function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  let upper = 30;
  let lower = -30;
    if (mouseIsPressed) {
    upper = 210;
    lower = 150;
  } else {
    upper = 30;
    lower = -30;
  }
  fill("yellow")
  arc(width/2, height/2, 200, 200, upper , lower ,PIE);
  text()
  //rect(width/2,height/2,200,100);
  print("the width is " + width);
}
