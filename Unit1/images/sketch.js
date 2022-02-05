let myPicture;

function setup() {
  createCanvas(500, 500);
  myPicture = loadImage("assets/3-127-latemodels.jpg");

}

function draw() {
  image(myPicture,100,100,400,400);
}
