let lightState = 0;
let timer = 10;
let carX = 0;
let carSpeed;
let redTimer;
let redReset = 100;
let yellowTimer;
let yellowReset = 65;
let greenTimer;
let greenReset = 180;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  redTimer = redReset;
  yellowTimer = yellowReset;
  greenTimer = greenReset;
  angleMode(DEGREES);
}

function draw() {
  background(220);
  fill('black');
  rect(width/2,height-70,width,75)
  for(let i = 0;i<width;i+=15){
    fill('yellow');
    rect(i,height-70,10,5)
  }
  rect()
  switch(lightState){
    case 0:
      carSpeed = 9;
      fill('grey');
      rect(width/2, height/2, 150, 500);
      fill('grey');
      circle(width/2,(height/2)-160,125);
      fill('grey');
      circle(width/2,height/2,125);
      fill('green')
      circle(width/2,(height/2)+160,125);
      greenTimer--;
      if(greenTimer<0){
      greenTimer = greenReset;
      lightState++;
      }
    break;

    case 1:
      carSpeed = 2;
      fill('grey');
      rect(width/2, height/2, 150, 500);
      fill('grey');
      circle(width/2,(height/2)-160,125);
      fill('yellow');
      circle(width/2,height/2,125);
      fill('grey')
      circle(width/2,(height/2)+160,125);
      yellowTimer--;
      if(yellowTimer<0){
        yellowTimer = yellowReset;
        lightState++;
      }
    break;

    case 2:
      carSpeed = 0;
      fill('grey');
      rect(width/2, height/2, 150, 500);
      fill('red');
      circle(width/2,(height/2)-160,125);
      fill('grey');
      circle(width/2,height/2,125);
      fill('grey')
      circle(width/2,(height/2)+160,125);
      redTimer--;
      if(redTimer<0){
      redTimer = redReset;
      lightState++;
      }
    break;
  }//switch end
  lightState = lightState%3;
  carX+=carSpeed;
  carX = carX % width;
  push();
  fill("yellow");
  arc(carX+25, height-50, 80, 80, -25,25, PIE);
  pop();
  fill("red");
  rect(carX,height-50,50,25);
}
