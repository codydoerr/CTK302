let numberOfTouches;
let circleSize;
let waitTooLong = false;
let heldOne = false;
let sharkAttack = false;
let timer = 0;
var gif_loadImg, gif_createImg;

function preload() {
    gif_loadImg = loadImage("assets/sharkattack.gif");

}

function setup() {
    circleSize = 200;
    createCanvas(800,800);
    rectMode(CENTER);
    textSize(20);
}

function draw() {
    clear();

    numberOfTouches = touches.length;
    if (touches.length > 0) {
        for (let i = 0; i < (touches.length); i++) {
            if (touches.length < 3) {
                fill("black");
                circle(touches[i].x, touches[i].y, circleSize);
            } else {
                sharkAttack = false;
            }
        }
        if (!sharkAttack) {
            switch (numberOfTouches) {
                case 0:
                    if (!heldOne) {
                        text("Hello. Welcome to The Test. Please create one circle for me.", 5, 22);
                        if (waitTooLong) {
                            text("If you do not know how to make a circle, just try touching the screen.", width / 2, height / 2);
                        } else {
                            timer++;
                            if (timer > 5 * 60) {
                                waitTooLong = true;
                            }
                        }
                    } else {
                        text("Please place your finger back on the screen", 5, 22);
                    }
                    break;

                case 1:
                    sharkAttack = false;
                    heldOne = true;
                    text("Good job! Now, please make a second circle for me", 5, 22);
                    // put a picture here
                    break;

                case 2:
                    text("Awesome! You made two circles! Now, connect the circles please.", 5, 22);
                    if (dist(touches[0].x, touches[0].y, touches[1].x, touches[1].y) < circleSize) {
                        sharkAttack = true;
                    }
                    // put a picture here
                    break;
                default:
                    text("No no, please remove a finger for me. Only make two at a time!", 5, 22);
                    sharkAttack = false;
                    break;

            }
        } else {
            gif_createImg = createImg("assets/sharkattack.gif");
            image(gif_loadImg, width / 2, height / 2);
            gif_createImg.position(50, 350);
            text("Quick remove your fingers!", width / 2, height / 2);
        }
    }
}
