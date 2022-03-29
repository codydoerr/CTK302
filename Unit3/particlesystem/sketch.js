let myCar;
let cars = [];
let emitters = [];

function setup() {

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  cars.push(new Car(mouseX,mouseY));
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if(cars[i].a<1){
      cars.splice(i,1);
    }
  }
  for (let i = 0; i < emitters.length;i++){
    emitters[i].emit();
  }
}
function mouseReleased(){
    emitters.push(new CarEmitter(mouseX,mouseY));
}


class CarEmitter{
  constructor(x,y){
    this.emitterCars = [];
    this.emitterLocation = createVector(x,y);
  }
  emit(){
    this.emitterCars.push(new Car(this.emitterLocation.x,this.emitterLocation.y));
    for (let i = 0; i < this.emitterCars.length; i++) {
      this.emitterCars[i].display();
      this.emitterCars[i].move();
      if(this.emitterCars[i].a<1){
        this.emitterCars.splice(i,1);
      }
    }
  }
}
class Car {

  // constructor
  constructor(x,y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-5,-3));
    this.r = random(127,255);
    this.g = random(0,80);
    this.b = 0;
    this.a = 255;
  }

  // methods

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.a);
    circle(this.pos.x, this.pos.y, 25);

  }

  move() {
    this.pos.add(this.vel);
    this.a-=5;

  }

}
