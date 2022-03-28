let frogPosition;
let cars = [];
let speed = 5;
let moving = false;
let state = 0;
let timer = 0;
let maxCars = 500;
let sizeOfText = 50;
let bgR;
let bgB;
let bgG;
let bgA;
let c;
function setup() {
    createCanvas(windowWidth - 10, windowHeight - 10);

    // Spawn one object
    for (let i = 0; i < maxCars; i++) {
        cars.push(new Car());
    }
    frogPosition = createVector(width / 2, height * 3 / 4);
}

function draw() {
    switch (state) {
        case 0: //menu
            bgR = random(255);
            bgG = random(255);
            bgB = random(255);
            bgA = random(0, 10);
            c = color(bgR, bgG, bgB, bgA);
            background(c);
            textSize(sizeOfText);
            text("WELCOME", width / 2, height / 2,100,100);
            break;
        case 1: //game
            timer++;
            textSize(sizeOfText);
            text(timer/60,10,10);
            if(timer>60*60){
                state = 3;
                timer = 0;
            }
            game();
            break;
        case 2: //win screen
            bgR = random(144);
            bgG = random(144);
            bgB = random(144);
            bgA = random(0, 10);
            c = color(bgR, bgG, bgB, bgA);
            background(c);
            fill('black');
            textSize(sizeOfText);
            text('You Succeed!', width/2,height/2);
            break;
        case 3: //lose screen
            bgR = random(145,255);
            bgG = random(145,255);
            bgB = random(145,255);
            bgA = random(0, 10);
            c = color(bgR, bgG, bgB, bgA);
            background(c);
            fill('black');
            textSize(sizeOfText);
            text('You Failed!', width/2,height/2);
            break;
    }
}

function game() {
    bgR = random(255);
    bgG = random(255);
    bgB = random(255);
    bgA = random(0, 10);
    c = color(bgR, bgG, bgB, bgA);
    background(c);
    for (let i = 0; i < cars.length - 1; i++) {
        cars[i].display();
        cars[i].move();
        if (cars[i].pos.dist(frogPosition) < 50) {
            cars.splice(i, 1);
        }
    }
    if(cars.length == 0){
        state = 2;
    }
    fill(c);
    ellipse(frogPosition.x, frogPosition.y, 40);
    checkForKeys();
}

function mouseReleased() {
    switch (state) {
        case 0: {
            state = 1;
            break;
        }
        case 2: {
            state = 0;
            break;
        }
        case 3: {

            state = 0;
            break;
        }
    }
}

function checkForKeys() {
    if (keyIsDown(LEFT_ARROW) && !moving) {
        moving = true;
        frogPosition.x -= speed;
        moving = false;
    } else if (keyIsDown(RIGHT_ARROW) && !moving) {
        moving = true;
        frogPosition.x += speed;
        moving = false;
    }
    if (keyIsDown(UP_ARROW) && !moving) {
        moving = true;
        frogPosition.y -= speed;
        moving = false;
    } else if (keyIsDown(DOWN_ARROW) && !moving) {
        moving = true;
        frogPosition.y += speed;
        moving = false;
    }
}
//Class represents the cars on the screen
class Car {

    // constructor and attributes
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.v = createVector(random(1, 10), 0);
        this.rgb = createVector(random(255), random(255), random(255));
        this.a = random(255);
        this.textSize = random(36, 84);
    }

    // methods

    display() {
        fill(this.rgb.x, this.rgb.y, this.rgb.z, this.a);
        rect(this.pos.x, this.pos.y, 80, 25);
        //textSize(this.textSize);
        //text("Bongo",this.pos.x, this.pos.y);
    }

    move() {
        this.pos.add(this.v);
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.pos.x = random(width);
        } else if (this.pos.y > height) {
            this.pos.y = 0;
            this.pos.x = random(width);
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.pos.y = random(height);
        } else if (this.pos.x > width) {
            this.pos.x = 0;
            this.pos.y = random(height);
        }
    }

}
