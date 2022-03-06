let numberOfTouches;
let circleSize;
let waitTooLong = false;
let heldOne = false;
let sharkAttack = false;
let timer = 0;
let playingGif = false;
var gif_loadImg, gif_createImg;
var textX;
var textY;
var textSizeTotal = 20;

function preload() {
  gif_loadImg = loadImage("assets/sharkattack.gif");
}

function setup() {
  circleSize = 200;
  rectMode(CENTER);
  textSize(textSizeTotal);
  createCanvas(800, 800);
  textX = width / 2;
  textY = height / 4;
}

function draw() {
  background("cyan");
  numberOfTouches = touches.length;
  if (sharkAttack) {
    if (!playingGif) {
      gif_createImg = createImg("assets/sharkattack.gif");
      image(gif_loadImg, width / 2, height / 2);
      gif_createImg.position(50, 350);
      playingGif = true;
    }
    text("Quick remove your fingers!", textX, textY);
  } else if (touches.length > 0) {
    if (!sharkAttack) {
      for (let i = 0; i < (touches.length); i++) {
        if (touches.length < 3) {
          fill("black");
          circle(touches[i].x, touches[i].y, circleSize);
        }
      }
      switch (numberOfTouches) {
        case 1:
          sharkAttack = false;
          heldOne = true;
          text("Good job! Now, please make a second circle for me", textX, textY);
          break;

        case 2:
          text("Awesome! You made two circles! Now, connect the circles please.", 5, 22);
          if (dist(touches[0].x, touches[0].y, touches[1].x, touches[1].y) < circleSize) {
            sharkAttack = true;
          }
          break;
        default:
          text("No no, please remove a finger for me. Only make two at a time!", textX, textY);
          sharkAttack = false;
          break;
      }
    }
  }else {
    if (!heldOne) {
      fill("black");
      text("Hello. Welcome to The Test. Please create one circle for me.", width / 2, height / 4,width,textSizeTotal);
      if (waitTooLong) {
        fill("black");
        text("If you do not know how to make a circle, just try touching the screen.", textX, textY + textSizeTotal);
      } else {
        timer++;
        if (timer > 5 * 60) {
          waitTooLong = true;
        }
      }
    } else {
      text("Please place your finger back on the screen", textX, textY);
    }
  }
}
