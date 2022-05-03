// variables needed for gyroscope
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;
var fishImg;
var hookImg;
// var bunnyImage;
var fishes = [];
var frogPos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;


  // spawn a bunch of fishes
  for (var i = 0; i < 40; i++) {
    fishes.push(new Fish());
  }
  //load fish img
  fishImg = loadImage("assets/PNG/fish.png");
  hookImg = loadImage("assets/PNG/hook.png");
  // initialize the frog's position
  frogPos = createVector(width / 2, height - 80);
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
}

function draw() {

  background('#c6f5ff'); // light blue

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);


  // move the frog around the screen
  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x, y
  //  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  // draw the FROG
  // image(bunnyImage, 0, 0, 500, 500);
  image(hookImg,0,0,100,100);
  pop();


  // update the frog's position using the accelerometer data
  frogPos.x = xPosition;
  frogPos.y = yPosition;

  // iterate through the fish loop to move them and see if we need to delete fishes
  for (let i = 0; i < fishes.length; i++) {
    fishes[i].display();
    if (dist(frogPos.x,frogPos.y,fishes[i].pos.x,fishes[i].pos.y)< 50) {
      fishes.splice(i, 1);
    }
  }

  // MORE DECORATIONS - write that pretty ATK type on top.
  fill('white');
  textSize(40);
  textAlign(CENTER);
  text("Catch the Fish!", width / 2, 600, windowWidth - 200, windowHeight - 200);


  // Debugging information -- take this out when you're ready for production!
  // Just a bunch of text commands to display data coming in from addEventListeners
  // textAlign(LEFT);
  // textSize(20);
  // fill('black');
  // text("orientation data:", 25, 25);
  // textSize(15);
  // text("alpha: " + alpha, 25, 50);
  // text("beta: " + beta, 25, 70);
  // text("gamma: " + gamma, 25, 90);
  // textSize(20);
  // text("acceleration data:", 25, 125);
  // textSize(15);
  // text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
  // text("y = " + y, 25, 170);
  // text("z = " + z, 25, 190);


}

function deviceShaken() {
  // re-spawn fishes
  fishes = []; // clear the array first
  for (let i = 0; i < 40; i++) {
    fishes.push(new Fish());
  }
}


// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

// fish class!!
class Fish {
  constructor(){
    this.pos = createVector(width/2, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
  }
  drive() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
  display() {
    // How to do angle based on current velocity in unity
    // Vector2 dir = rigidbody.velocity;
    // float angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
    // transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);
    this.drive();
    push();
    rotate(atan2(this.vel.y,this.vel.x));
    image(fishImg,this.pos.x,this.pos.y,50,50);
    pop();
  }
}
