let x = 7;
let y = 7;
function setup() {
// Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background(0,50,255);
  //noStroke();
  
  //This is used to generate the sun
  fill(255,255,0);
  arc(360, 300, 280, 280, PI, TWO_PI);
  //This is used to generate the clouds


}

function draw() {
  fill(0,50,255)
  rect(0,0,720,150);
  fill(255);
  for(let i=0; i<3; i++){
      ellipse(x,125,200,45);
      x+=1;
  }
  fill(255);
  text(mouseX + ', ' + mouseY,20,20);

  fill(0,85,255);
  ellipse(random(0,720),random(300,400),50,10);
}
