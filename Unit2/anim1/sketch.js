let x = 0;
let y = 5;
let flip = false;
let clearFont;
function preload(){
    clearFont = loadFont("assets/race_sport/Race Sport Free.ttf");
}
function setup() {
    createCanvas(500, 500);
}
function draw() {

    background("black");
    //This is for moving the rectangle
    //rect(x, height/2, 250, 250);
    //This is for moving the words
    //make sure to add a custom font
    //anim1 needs word or phrase going across screen not in default font
    textSize(32);
    fill("white");
    textFont(clearFont);
    text("Hello! Thank you for visiting!", width / 2, x, 20, 500);
    if (!flip) x += y;
    else if(flip) x += -y;
    if (x >= height) flip = true;
    else if(x <= (height - height)) flip = false;
}
