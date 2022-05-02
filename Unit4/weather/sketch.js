// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = -20;
let windspeed = 0;
let totalRain = [];
let rainImg;
let cloudImg;
class Rain {

  // constructor
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, random(5, 3));
    this.r = random(127, 255);
    this.g = random(0, 80);
    this.b = 0;
    this.a = 255;
  }

  // methods

  display() {
    noStroke();
    //fill(this.r, this.g, this.b, this.a);
    //circle(this.pos.x, this.pos.y, 25);
    image(rainImg, this.pos.x, this.pos.y, 50, 80);

  }

  move() {
    this.pos.add(this.vel);


  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rainImg = loadImage('assets/raindrop.png');
  cloudImg = loadImage('assets/clouds.png');

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Graham,TX,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US


  // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx

  let myIDString = "appid=98ac55599a8149e747f9e49293c34e52";

  let myTotalString = myCityString + myIDString;

  rectMode(CENTER);
  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  if (windspeed == 0) {
    x = width / 2;
  }
}

function draw() {
  switch (state) {

    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      background(200);
      fill("black");
      textSize(30);
      text(weather.name, width / 2, 35);
      text("is currently experiencing " + weather.weather[0].description, width / 2, 80);
      // cloud
      fill("white");
      noStroke();
      if (weather.weather[0].id == 500 || weather.weather[0].id == 501 || weather.weather[0].id == 502 || weather.weather[0].id == 503 || weather.weather[0].id == 504 || weather.weather[0].id == 511 || weather.weather[0].id == 520 || weather.weather[0].id == 521 || weather.weather[0].id == 522 || weather.weather[0].id == 531) {
        if (totalRain.length < weather.weather[0].id - 490)
          totalRain.push(new Rain(random(x+20-50, x+20+50), 400));
      }
      image(cloudImg,x, 300, 200, 100);
      if (totalRain.length > 0) {
        for (let i = 0; i < totalRain.length; i++) {
          totalRain[i].display();
          totalRain[i].move();
          if (totalRain[i].pos.y > height) {
            totalRain.splice(i, 1);
          }
        }
      }
      // move the cloud's x position
      if (windspeed == 0) {
        x = width / 2;
      } else {
        x = x + windspeed / 3;
        if (x > width) x = -20;
      }

      break;
  }
}
