let pressed = false;
let clearFont;
let roughFont;
function preload(){
  clearFont = loadFont("assets/race_sport/Race Sport Free.ttf");
  roughFont = loadFont("assets/road_rage/Road_Rage.otf");
}
function setup() {
  createCanvas(900,900);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  fill('white');
  text(mouseX + ", " +mouseY,50,50);
  //arcs for pacman
  push();
      let lower = 30;
      let upper = -30;
        if (pressed) {
        lower = 0;
        upper = -60;
        fill("#0044FF");
        quad(270,290,850,-100,1000,150,270,310);
        fill("#0044FF");
        quad(270,290,850,-80,1050,120,270,310);
        fill("#0066FF");
        quad(270,290,875,-80,1000,120,270,310);
        fill("#0088FF");
        quad(270,290,900,-80,1000,100,270,310);
        fill("#00AAFF");
        quad(270,290,925,-80,950,100,270,310);
        fill("#00BBFF");
        quad(270,290,925,-60,950,75,270,310);
        fill("#00DDFF");
        quad(270,290,950,-60,950,60,270,310);
        fill("#00FFFF");
        quad(270,290,970,-60,950,45,270,310);
        textFont(roughFont);
        text("BWAAAARRRGGGGGGHHHHHHH", 550,520,200,300);
      } else {
          fill('white');
          textSize(40);
          textFont(clearFont);
          text("What's going on? My name is pa--.... Bob. My name is Bob. I have this weird thing where I-...", 550,520,200,300);
        lower = 30;
        upper = -30;
      }

      fill("yellow")
      arc(300, 300, 200, 200, lower , upper ,PIE);
      noStroke();
      //body
      quad(200,350,300,410,300,700,200,700);
      //legs
      quad(200,650,250,650,225,840,200,900);
      quad(250,650,300,650,300,900,275,840);
      //arms
      quad(300,490,400,470,400,490,300,510);
      quad(400,470,470,400,470,430,400,490);
      fill("white");
      circle(320,240,20);
      fill("black");
      circle(320,240,10);
  pop();
  print("the width is " + width);
}
function mousePressed(){
    pressed = !pressed;
}
