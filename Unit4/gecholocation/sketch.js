let name;
let myColor;
let myColor2;
var num;
var distance;
var font1, font2;
let locationData;
let myMap;
let canvas;
var locationID;
let locations = [];
let peoria;
let morton;
let pekin;
let bloomington;
let washington;
let normal;
let myPin;
let me;
let flower;
let story;
let state = 0;
let place = [];
const mappa = new Mappa('Leaflet');
// Lets put all our map options in a single object
const options = {
  //Shows Peoria, Morton, and Bloomington
  lat: 40.5428,
  lng: -89.2593,
  zoom: 10,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload() {
  font1 = loadFont("assets/Anton.ttf");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  num = 0;
  flower = loadImage("assets/Spring.png");
  textFont(font1, 12);
  //setInterval(updateLocations,30000);
  // intervalCurrentPosition(positionPing, 5000); // this is what calls positionPing function
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  imageMode(CENTER);
  textAlign(CENTER);

  locationData = getCurrentPosition();
}

class EchoMapPin {
  constructor(latLong, neighbor, label, story) {
    this.pos = latLong;
    if (this.connected = null) {
      this.connected = false;
    }
    this.neighbor = neighbor;
    this.label = label;
    this.neighborIndex;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.story = story
    this.panel = new EchoMapPanel(this.pos,this.label,this.story);
  }
  display() {
    this.panel.display();
    if (this.neighbor != null) {
      // line(this.pos.x,this.pos.y,this.neighbor.pos.x,this.neighbor.pos.y);
      vertex(this.pos.x, this.pos.y);
    }
    //coloring image with their color
    push();
    tint(myColor);
    image(flower, this.pos.x, this.pos.y, 25, 25);
    pop();
  }
}

class EchoMapPanel{
  constructor(position,label,story){
    this.pos = position;
    this.label = label;
    this.story = story
    this.truePos = createVector(this.pos.x-270,this.pos.y-200);
  }
  display(){
    if (dist(this.pos.x, this.pos.y, mouseX, mouseY) < 10) {
      stroke('black');
      fill('white');
      rect(this.truePos.x,this.truePos.y,250,200);
      fill(myColor2);
      textSize(24);
      text(this.label, this.truePos.x+10, this.truePos.y+30);
      textAlign(LEFT);
      noStroke();
      fill('black');
      textSize(12);
      text(this.story, this.truePos.x+10, this.truePos.y+40,240,160);
    }
  }
}

function draw() {
  clear();
  if (name == null) {
    name = prompt("What is your name?");
    myColor = prompt("What is your favorite color?");
    myColor2 = prompt("What is your next favorite color?")
    story = prompt("What is your story?");
    if(story.length > 250){
      story = prompt("What is your story? (Less than 250 Characters Please)");
    }
  }
  if (washington == null) {
    washington = new EchoMapPin(myMap.latLngToPixel(40.7036, -89.4073), null, 'Washington',"Washington is a city in Tazewell County, Illinois, United States. Washington is on U.S. Route 24 and Illinois Route 8, northeast of East Peoria.");
  } else {
    washington = new EchoMapPin(myMap.latLngToPixel(40.7036, -89.4073), washington.neighbor, 'Washington',"Washington is a city in Tazewell County, Illinois, United States. Washington is on U.S. Route 24 and Illinois Route 8, northeast of East Peoria.");
  }
  if (peoria == null) {
    peoria = new EchoMapPin(myMap.latLngToPixel(40.6936, -89.5890), null, 'Peoria',"Peoria is a city in central Illinois. Set on the Illinois River, the Peoria Riverfront Museum has a striking, contemporary design.");
  } else {
    peoria = new EchoMapPin(myMap.latLngToPixel(40.6936, -89.5890), peoria.neighbor, 'Peoria',"Peoria is a city in central Illinois. Set on the Illinois River, the Peoria Riverfront Museum has a striking, contemporary design.");
  }
  if (morton == null) {
    morton = new EchoMapPin(myMap.latLngToPixel(40.6128, -89.4593), null, 'Morton',"Morton is a village in Tazewell County, Illinois, United States. The population was 17,117 at the 2020 census. Morton is a suburb of Peoria and is part of the Peoria Metropolitan Statistical Area and is located southeast of Peoria.");
  } else {
    morton = new EchoMapPin(myMap.latLngToPixel(40.6128, -89.4593), morton.neighbor, 'Morton',"Morton is a village in Tazewell County, Illinois, United States. The population was 17,117 at the 2020 census. Morton is a suburb of Peoria and is part of the Peoria Metropolitan Statistical Area and is located southeast of Peoria.");
  }
  if (bloomington == null) {
    bloomington = new EchoMapPin(myMap.latLngToPixel(40.4842, -88.9937), null, 'Bloomington',"Bloomington is a city in central Illinois. Downtown, the McLean County Museum of History traces Abraham Lincoln’s time as an attorney in the area, and has a re-created pioneer log cabin.");
  } else {
    bloomington = new EchoMapPin(myMap.latLngToPixel(40.4842, -88.9937), bloomington.neighbor, 'Bloomington',"Bloomington is a city in central Illinois. Downtown, the McLean County Museum of History traces Abraham Lincoln’s time as an attorney in the area, and has a re-created pioneer log cabin.");
  }
  if (pekin == null) {
    pekin = new EchoMapPin(myMap.latLngToPixel(40.5675, -89.6407), null, 'Pekin',"Pekin is a city in and the county seat of Tazewell County in the U.S. state of Illinois. Located on the Illinois River, Pekin is the largest city of Tazewell County and the second most populous municipality of the Peoria metropolitan area, after Peoria itself.");
  } else {
    pekin = new EchoMapPin(myMap.latLngToPixel(40.5675, -89.6407), pekin.neighbor, 'Pekin',"Pekin is a city in and the county seat of Tazewell County in the U.S. state of Illinois. Located on the Illinois River, Pekin is the largest city of Tazewell County and the second most populous municipality of the Peoria metropolitan area, after Peoria itself.");
  }
  if (normal == null) {
    normal = new EchoMapPin(myMap.latLngToPixel(40.5142, -88.9906), null, 'Normal',"Normal is a town in McLean County, Illinois, United States. As of the 2020 census, the town's population was 52,736. Normal is the smaller of two principal municipalities of the Bloomington–Normal metropolitan area, and Illinois' seventh most populous community outside the Chicago metropolitan area.");
  } else {
    normal = new EchoMapPin(myMap.latLngToPixel(40.5142, -88.9906), normal.neighbor, 'Normal',"Normal is a town in McLean County, Illinois, United States. As of the 2020 census, the town's population was 52,736. Normal is the smaller of two principal municipalities of the Bloomington–Normal metropolitan area, and Illinois' seventh most populous community outside the Chicago metropolitan area.");
  }
  if (myPin == null) {
    myPin = new EchoMapPin(myMap.latLngToPixel(locationData.latitude, locationData.longitude), null, name,story);
  } else {
    myPin = new EchoMapPin(myMap.latLngToPixel(locationData.latitude, locationData.longitude), myPin.neighbor, name,story);
  }
  noFill();
  beginShape();
  peoria.display();
  morton.display();
  bloomington.display();
  washington.display();
  pekin.display();
  normal.display();
  if (myPin != null) {
    myPin.display();
  }
  endShape();
}

function gotData(data) {
  console.log(data); // Print the data in the console
}

function beginEcho() {
  locations = [];
  locations.push(peoria);
  locations.push(pekin);
  locations.push(washington);
  locations.push(morton);
  locations.push(bloomington);
  locations.push(normal);
  locations.push(myPin);
  let tempDistance;
  let closestNeighbor;
  for (let i = 0; i < locations.length; i++) {
    tempDistance = null;
    closestNeighbor = null;
    for (let j = 0; j < locations.length; j++) {
      if (i == j || locations[j].connected) {
        j++;
      } else {
        if (tempDistance == null) {
          tempDistance = calcGeoDistance(locations[j].pos.x, locations[j].pos.y, locations[i].pos.x, locations[i].pos.y, 'mi');
          closestNeighbor = locations[j];
          locations[j].neighbor = locations[i];
        } else if (calcGeoDistance(locations[j].pos.x, locations[j].pos.y, locations[i].pos.x, locations[i].pos.y, 'mi') < tempDistance) {
          tempDistance = calcGeoDistance(locations[j].pos.x, locations[j].pos.y, locations[i].pos.x, locations[i].pos.y, 'mi');
          closestNeighbor.connected = false;
          closestNeighbor = locations[j];
          closestNeighbor.connected = true;
          locations[j].neighbor = locations[i];
        }
      }
    }
    locations[i].neighbor = closestNeighbor;
    locations[i].connected = true;
  }
}
