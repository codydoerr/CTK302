let jokeState = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    textAlign(CENTER);
}
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
function draw(){
background("black");
fill("White");
switch (jokeState) {
    case 0:
        text("Why did the chicken cross the road?", width/2, height/2);
        break;
    case 1:
        text("To get to the other side! BAH HAH HAH", width/2, height/2);
        break;
    default:

        break;
}
}

function mouseReleased() {
    jokeState = (jokeState+1) % 2;
}
