function setup() {
  createCanvas(1000, 1000);
    angleMode(DEGREES);
}
let x = 0;
function draw() {
    background("black");
    fill("white");
    text(mouseX + "," + mouseY,10,10);
    push();
    translate(x,0);
    avatar();
    pop();
    if(x>width+300){
        x=-200;
    }
    x+=5;
}
let upper = 45;
let lower = 315;
function avatar(){
    fill("yellow");
    arc(-200, height/2, 200, 200, upper , lower ,PIE);
}
