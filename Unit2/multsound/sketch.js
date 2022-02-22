let song1;
let song2;
let song3;
let songState = 0;

function preload() {
    song1 = loadSound('assets\ellary-loop-1.mp3');
    song2 = loadSound('assets\ellary-loop-2.mp3');
    song3 = loadSound('assets\ellary-loop-3.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    switch (songState) {
        case 0:
            song2.pause();
            song1.play();
            songState++;
            break;
        case 1:
            background('black');
            break;
        case 2:
            song1.pause();
            song2.play();
            songState++;
            break;
        case 3:
            background('black');
            break;
        case 4:
            song2.pause();
            song3.play();
            songState++;
            break;
        case 5:
            background('black');
            break;
    }

}

function mouseReleased() {
    songState++;
    songState = songState % 6
}
