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
    fill("white");
    switch (songState) {
        case 0:
            song1.loop();
            songState++;
            break;
        case 1:
            background('black');
            text("Ellary Loop 1",width/2,height/2);
            break;
        case 2:
            song2.loop();
            songState++;
            break;
        case 3:
            background('black');
            text("Ellary Loop 2",width/2,height/2);
            break;
        case 4:
            song3.loop();
            songState++;
            break;
        case 5:
            background('black');
            text("Ellary Loop 3",width/2,height/2);
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
