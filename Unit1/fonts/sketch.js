let clearFont;
let roughFont;
function preload(){
  clearFont = loadFont("assets/race_sport/Race Sport Free.ttf");
  roughFont = loadFont("assets/road_rage/Road_Rage.otf");
}
function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  push();
    fill("red");
    textFont(clearFont);
    textSize(36);
    text("RACE DAY SATURDAY NIGHT!",width/2,height/2-20,1000,36);
  pop();
  push();
    fill("red");
    textFont(roughFont);
    textSize(32);
    text("SHOWDOWN FOR THE CHAMPIONSHIP",width/2,height/2+20
    ,width,50);
  pop();

}
function draw() {

}
