let frogPosition;
let cars = [];
let speed = 5;
let moving = false;
let state = 0;
let timer = 60;
let maxCars = 50;
let sizeOfText = 100;
let words;
let blockFont
let bgR;
let bgB;
let bgG;
let bgA;
let c;

function preload() {
  blockFont = loadFont("assets/typeblock/TYPEB___.TTF");
  words = loadStrings("assets/words.txt");
}

function setup() {
  words.pop();
  textFont(blockFont);
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
      rectMode(CENTER);
      bgR = random(255);
      bgG = random(255);
      bgB = random(255);
      bgA = random(0, 10);
      c = color(bgR, bgG, bgB, bgA);
      background(c);
      textSize(sizeOfText);
      rectMode(CENTER);
      textAlign(CENTER);
      text("Overwhelming", width / 2, height / 2);
      break;
    case 1: //game
      rectMode(CENTER);
      textAlign(CENTER);
      timer -= 1 / 60;

      if (timer < 1) {
        state = 3;
        timer = 10;
      }
      game();
      textSize(sizeOfText);
      fill('white');
      text(round(timer, 1), width / 2, sizeOfText);
      break;
    case 2: //win screen
      rectMode(CENTER);
      textAlign(CENTER);
      bgR = random(144);
      bgG = random(144);
      bgB = random(144);
      bgA = random(0, 10);
      c = color(bgR, bgG, bgB, bgA);
      background(c);
      fill('black');
      textSize(sizeOfText);
      text('The Day is Over', width / 2, height / 2);
      timer -= 1 / 60;

      if (timer < 1) {
        text('Click to Wake Up', width / 2, (height / 2) + 100);
      }
      break;
    case 3: //lose screen
      bgR = random(145, 255);
      bgG = random(145, 255);
      bgB = random(145, 255);
      bgA = random(0, 10);
      c = color(bgR, bgG, bgB, bgA);
      background(c);
      fill('black');
      textSize(sizeOfText);
      text('Overwhelmed', width / 2, height / 2);
      timer -= 1 / 60;

      if (timer < 1) {
        fill('black');
        textSize(sizeOfText);
        text('Click to Try Again', width / 2, (height / 2) + 100);
      }
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
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPosition) < 50) {
      cars.splice(i, 1);
    }
  }
  if (cars.length == 0) {
    state = 2;
  }
  fill('black');
  checkForKeys();
  ellipse(frogPosition.x, frogPosition.y, 40);

}

function mouseReleased() {
  switch (state) {
    case 0: {
      state = 1;
      break;
    }
    case 2: {
      timer = 50;
      maxCars+=25;
      for (let i = cars.length - 1; i < maxCars; i++) {
        if (cars.length - 1 < 0) i = 0;
        cars.push(new Car());
      }
      state = 0;
      break;
    }
    case 3: {
      for (let i = cars.length - 1; i < maxCars; i++) {
        if (cars.length - 1 < 0) i = 0;
        cars.push(new Car());
      }
      timer = 60;
      state = 0;
      break;
    }
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW) && !moving) {
    moving = true;
    if (frogPosition.x >= 0) frogPosition.x -= speed;
    moving = false;
  } else if (keyIsDown(RIGHT_ARROW) && !moving) {
    moving = true;
    if (frogPosition.x <= width) frogPosition.x += speed;
    moving = false;
  }
  if (keyIsDown(UP_ARROW) && !moving) {
    moving = true;
    if (frogPosition.y >= 0) frogPosition.y -= speed;
    moving = false;
  } else if (keyIsDown(DOWN_ARROW) && !moving) {
    moving = true;
    if (frogPosition.y <= height) frogPosition.y += speed;
    moving = false;
  }
}
//Class represents the cars on the screen
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(random(1,width-1), random(50, height - 50));
    this.v = createVector(random(5, 15), 0);
    this.rgb = createVector(random(255), random(255), random(255));
    this.a = 255//random(50, 255);
    this.textSize = random(36, 84);
    this.word = random(words);
  }

  // methods

  display() {
    rectMode(CENTER);
    textAlign(CENTER);
    fill(this.rgb.x, this.rgb.y, this.rgb.z, this.a);
    stroke(1);
    text(this.word, this.pos.x, this.pos.y);
    //rect(this.pos.x, this.pos.y, 80, 25);
    //textSize(this.textSize);
    //text("Bongo",this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.pos.y = random(50, height - 50);
    }
  }

}
