let jokeState = 0;
let timer = 0;
let timerMax = 10;
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
    switch (timer) {
        case timer>(timer/2):
            text("To get to the other side! BAH HAH HAH", width/2, height/2);
            break;
        default:
            text("Why did the chicken cross the road?", width/2, height/2);
            break;
            break;
    }
    timer = ((timer+1)*60) % (10*60);
}

function mouseReleased() {
    jokeState = (jokeState+1) % 2;
}
