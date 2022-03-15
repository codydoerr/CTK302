let frogPosition;
let cars = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('red');
  // Spawn one object
  for(let i = 0;i<50;i++){
    cars.push(new Car());
  }
  frogPosition = createVector(width/2,height*3/4);
}

function draw() {

  for(let i = 0;i<cars.length-1;i++){
    cars[i].display();
    cars[i].move();
    fill('white');
  }
  fill('green');
  ellipse(frogPosition.x,frogPosition.y,75);
}




class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(width/2,height/2);
    this.v = createVector(random(-10,10),random(-10,10));
    this.rgb = createVector(random(255),random(255),random(255));
    this.a = random(255);
    this.textSize = random(36,84);
  }

  // methods

  display() {
    fill(this.rgb.x,this.rgb.y,this.rgb.z,this.a);
    rect(this.pos.x, this.pos.y, 75, 25);
    //textSize(this.textSize);
    //text("Bongo",this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.v);
    if(this.pos.y<0){
      this.pos.y = height;
      this.pos.x = random(width);
    }else if(this.pos.y > height){
      this.pos.y = 0;
      this.pos.x = random(width);
    }
    if(this.pos.x<0){
      this.pos.x = width;
      this.pos.y = random(height);
    }else if(this.pos.x > width){
      this.pos.x = 0;
            this.pos.y = random(height);
    }
  }

}
