let song1;
let song2;
let song3;
let songState = 0;

function preload() {
    song1 = loadSound('assets/ellaryloop1.mp3');
    song2 = loadSound('assets/ellaryloop2.mp3');
    song3 = loadSound('assets/ellaryloop3.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    switch (songState) {
        case 0:
            song1.play();
            songState++;
            break;
        case 1:
            background('black');
            break;
        case 2:
            song2.play();
            songState++;
            break;
        case 3:
            background('black');
            break;
        case 4:
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
    song1.pause();
    song2.pause();
    song3.pause();
    songState = songState % 6
}
