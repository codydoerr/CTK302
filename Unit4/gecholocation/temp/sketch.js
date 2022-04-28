let flower;
let state = 0;
let name;
let myColor;
var locationData;
let myMap;
let canvas;
let json = {};
var locationID;
let locations = [];
let peoria;
let morton;
let pekin;
let bloomington;
let washington;
let normal;
let me;
let place = [];
const mappa = new Mappa('Leaflet');

// Lets put all our map options in a single object
const options = {
  lat: 40.5428,
  lng: -89.2593,
  zoom: 10,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload() {
  locationData = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // intervalCurrentPosition(positionPing, 5000); // this is what calls positionPing function
  // background(100); let's uncomment this, we don't need it for now
  font1 = loadFont("Assets/Anton.ttf");
  textFont(font1, 24);
  flower = loadImage("Assets/Spring.png");
  // Create a tile map with the options declared
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  imageMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  clear();
  if (name == null) {
    name = prompt("What is your name?");
    myColor = prompt("What is your favorite color?");
  }

  if (washington == null) {
    washington = new EchoMapPin(myMap.latLngToPixel(40.7036, -89.4073), null);
  } else {
    washington = new EchoMapPin(myMap.latLngToPixel(40.7036, -89.4073), washington.neighbor);
  }
  if (peoria == null) {
    peoria = new EchoMapPin(myMap.latLngToPixel(40.6936, -89.5890), null);
  } else {
    peoria = new EchoMapPin(myMap.latLngToPixel(40.6936, -89.5890), peoria.neighbor);
  }
  if (morton == null) {
    morton = new EchoMapPin(myMap.latLngToPixel(40.6128, -89.4593), null);
  } else {
    morton = new EchoMapPin(myMap.latLngToPixel(40.6128, -89.4593), morton.neighbor);
  }
  if (bloomington == null) {
    bloomington = new EchoMapPin(myMap.latLngToPixel(40.4842, -88.9937), null);
  } else {
    bloomington = new EchoMapPin(myMap.latLngToPixel(40.4842, -88.9937), bloomington.neighbor);
  }
  if (pekin == null) {
    pekin = new EchoMapPin(myMap.latLngToPixel(40.5675, -89.6407), null);
  } else {
    pekin = new EchoMapPin(myMap.latLngToPixel(40.5675, -89.6407), pekin.neighbor);
  }
  if (normal == null) {
    normal = new EchoMapPin(myMap.latLngToPixel(40.5142, -88.9906), null);
  } else {
    normal = new EchoMapPin(myMap.latLngToPixel(40.5142, -88.9906), normal.neighbor);
  }
  if (me == null) {
    me = new EchoMapPin(myMap.latLngToPixel(locationData.latitude, locationData.longitude), null);
  } else {
    me = new EchoMapPin(myMap.latLngToPixel(locationData.latitude, locationData.longitude), me.neighbor);
  }

  // washington = new EchoMapPin(myMap.latLngToPixel(40.7036, -89.4073));
  // peoria = new EchoMapPin(myMap.latLngToPixel(40.6936, -89.5890));
  // morton = new EchoMapPin(myMap.latLngToPixel(40.6128, -89.4593));
  // bloomington = new EchoMapPin(myMap.latLngToPixel(40.4842, -88.9937));
  // pekin = new EchoMapPin(myMap.latLngToPixel(40.5675, -89.6407));
  // normal = new EchoMapPin(myMap.latLngToPixel(40.5142, -88.9906));
  // me = new EchoMapPin(myMap.latLngToPixel(locationData.latitude, locationData.longitude));

  if (locations != null){
    for (i = 0; i < locations.length; i++){
      place.push(locations[i]);
    }
  }
  let places = random(place);
  tint(myColor);
  noFill();
  beginShape();
  peoria.display();
  morton.display();
  bloomington.display();
  washington.display();
  pekin.display();
  normal.display();
  me.display();
  // place[random(place.length)].display();
  // place[random(place.length)].display();
  // place[random(place.length)].display();
  // place[random(place.length)].display();
  // place[random(place.length)].display();
  // place[random(place.length)].display();
  // place[random(place.length)].display();
  endShape();




}

// function positionPing(position) {
//   // textSize(36);
//   background("#2452d1");
//   fill("white");
//   text("lat: " + position.latitude, 10, 40);
//   text("long: " + position.longitude, 10, 90);
// }

function gotData(data) {
  console.log(data); // Print the data in the console
}

//Button press
function beginEcho() {
  //Reset location array
  locations = [];
  locations.push(peoria);
  locations.push(morton);
  locations.push(bloomington);
  locations.push(normal);
  locations.push(washington);
  locations.push(pekin);
  locations.push(me);
  let tempDistance;

  // let closestNeighbor;
  // for (let i = 0; i < locations.length; i++) {
  //   tempDistance = null;
  //   for (let j = 0; j < locations.length; j++) {
  //     if (i == j || locations[j].connected) {
  //       j++;
  //     } else if (tempDistance == null) {
  //       tempDistance = calcGeoDistance(locations[i].pos.x, locations[i].pos.y, locations[j].pos.x, locations[j].pos.y, 'mi');
  //       closestNeighbor = locations[j];
  //       locations[j].neighbor = locations[i];
  //     } else if (calcGeoDistance(locations[i].pos.x, locations[i].pos.y, locations[j].pos.x, locations[j].pos.y, 'mi') < tempDistance) {
  //       tempDistance = calcGeoDistance(locations[i].pos.x, locations[i].pos.y, locations[j].pos.x, locations[j].pos.y, 'mi');
  //       closestNeighbor = locations[j];
  //       locations[j].neighbor = locations[i];
  //     }
  //   }
  //   locations[i].neighbor = closestNeighbor;
  // }
  let closestNeighbor;
  for (let i = 0; i < locations.length; i++) {
    tempDistance = null;
    for (let j = 0; j < locations.length; j++) {
      if (i == j || locations[j].connected) {
        j++;
      } else if (tempDistance == null) {
        tempDistance = calcGeoDistance(locations[i].pos.x, locations[i].pos.y, locations[j].pos.x, locations[j].pos.y, 'mi');
        closestNeighbor = locations[j];
        locations[i].neighbor = locations[j];
      } else if (Math.abs(calcGeoDistance(locations[i].pos.x, locations[i].pos.y, locations[j].pos.x, locations[j].pos.y, 'mi')) < Math.abs(tempDistance)) {
        tempDistance = calcGeoDistance(locations[i].pos.x, locations[i].pos.y, locations[j].pos.x, locations[j].pos.y, 'mi');
        closestNeighbor = locations[j];
        locations[i].neighbor = locations[j];
      }
    }
    //locations[i].neighbor = closestNeighbor;
  }
}

class EchoMapPin {
  constructor(latLong, neighbor) {
    this.pos = latLong;
    this.connected = false;
    this.neighbor = neighbor;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  display() {
    if (this.neighbor != null) {
      // line(this.pos.x, this.pos.y, this.neighbor.pos.x, this.neighbor.pos.y);
      vertex(this.pos.x, this.pos.y);
    }

    //color of the flower using their favorite color
    image(flower, this.pos.x, this.pos.y, 25, 25);
  }
}
