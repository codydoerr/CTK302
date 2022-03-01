let numberOfTouches;
let circleSize;
let waitTooLong = false;
let timer = 0;
function setup() {
    circleSize = 200;
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();
    numberOfTouches = touches.length;
    text(numberOfTouches + ' touches', 5, 10);
    if (touches.length > 0) {
        for (let i = 0; i < (touches.length); i++) {
            text("" + touches[i].x + ", " + touches[i].y, 50, 50);
            fill("black");
            circle(touches[i].x,touches[i].y, circleSize);
        }
    }


    switch (numberOfTouches) {
        case 0:
            text("Hello. Welcome to The Test. Please create one circle for me.", 5, 22);
            timer++;
            text(round(timer/60,2),10,10);
            if(timer > 30){
                timer = 0;

            }
            if(waitTooLong){
                text("If you do not know how to make a circle, just try touching the screen.")
            }
            break;

        case 1:
            text("it's kind of lonely here", 5, 22);
            // put a picture here
            break;

        case 2:
            text("two fingers are touching the screen", 5, 22);
            // put a picture here
            break;

        case 3:
            text("three are touching the screen", 5, 22);
            // put a picture here
            break;
        default:
            text("wow, there is " + numberOfTouches + " touching!", 5, 22);
            break;
            foreach()

    }

}
