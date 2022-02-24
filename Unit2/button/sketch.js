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
    fill("purple");
    rect(width/2,height/2,width/4,height/10);
    fill("white");
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
    if(mouseY > (  (height/2)-(height/20)  ) && mouseY <  (height/2)+(height/20) && mouseX > ((width/2)-(width/8)) && mouseX < ((width/2)+(width/8)))  {
        jokeState = (jokeState+1) % 2;
    }

}
