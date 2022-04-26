var num;
var distance;
var font1, font2;
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
const mappa = new Mappa('Leaflet');
let url = "";

// Lets put all our map options in a single object
const options = {
  //Shows Peoria, Morton, and Bloomington
    lat: 40.5428,
    lng: -89.2593,
    zoom: 11,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}



function preload() {
    //font1 = loadFont("assets/Mohave-Light.ttf");
    //loadJSON('\coordinates.json');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    num = 0;
    //setInterval(updateLocations,30000);
    // intervalCurrentPosition(positionPing, 5000); // this is what calls positionPing function
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);


}

function draw() {
    clear();
    if(washington == null){
        washington = new EchoMapPin(myMap.latLngToPixel(40.7036,-89.4073),null);
    }
    else {
        washington = new EchoMapPin(myMap.latLngToPixel(40.7036,-89.4073),washington.neighbor);
    }
    if(peoria == null){
        peoria = new EchoMapPin(myMap.latLngToPixel(40.6936, -89.5890),null);
    }
    else{
        peoria = new EchoMapPin(myMap.latLngToPixel(40.6936, -89.5890),peoria.neighbor);
    }
    if(morton == null){
        morton = new EchoMapPin(myMap.latLngToPixel(40.6128, -89.4593),null);
    }
    else{
        morton = new EchoMapPin(myMap.latLngToPixel(40.6128, -89.4593),morton.neighbor);
    }
    if(bloomington == null){
        bloomington = new EchoMapPin(myMap.latLngToPixel(40.4842, -88.9937),null);
    }
    else {
        bloomington = new EchoMapPin(myMap.latLngToPixel(40.4842, -88.9937),bloomington.neighbor);
    }
    if(pekin == null){
        pekin = new EchoMapPin(myMap.latLngToPixel(40.5675,-89.6407),null);
    }
    else {
        pekin = new EchoMapPin(myMap.latLngToPixel(40.5675,-89.6407),pekin.neighbor);
    }
    if(normal == null){
        normal = new EchoMapPin(myMap.latLngToPixel(40.5142,-88.9906),null);
    }
    else {
        normal = new EchoMapPin(myMap.latLngToPixel(40.5142,-88.9906),normal.neighbor);
    }

    peoria.display();
    morton.display();
    bloomington.display();
    washington.display();
    pekin.display();
    normal.display();
}

function gotData(data) {
    console.log(data); // Print the data in the console
}

function beginEcho() {
    locations.push(peoria);
    locations.push(morton);
    locations.push(bloomington);
    locations.push(normal);
    locations.push(washington);
    locations.push(pekin);
    let tempDistance;

    let closestNeighbor;
    for(let i = 0;i<locations.length;i++){
      tempDistance = null;
      for(let j = 0;j<locations.length;j++){
        if(i==j || locations[j].connected){
          j++;
        }else if(tempDistance == null){
          tempDistance = calcGeoDistance(locations[i].pos.x,locations[i].pos.y,locations[j].pos.x,locations[j].pos.y, 'mi');
          closestNeighbor = locations[j];
          locations[j].neighbor = locations[i];
        }
        else if(calcGeoDistance(locations[i].pos.x,locations[i].pos.y,locations[j].pos.x,locations[j].pos.y, 'mi') < tempDistance){
          tempDistance = calcGeoDistance(locations[i].pos.x,locations[i].pos.y,locations[j].pos.x,locations[j].pos.y, 'mi');
          closestNeighbor = locations[j];
          locations[j].neighbor = locations[i];
        }
      }
      locations[i].neighbor = closestNeighbor;
    }
}
class EchoMapPin {
  constructor(latLong,neighbor) {
    this.pos = latLong;
    this.connected = false;
    this.neighbor = neighbor;
  }
  display() {
    if(this.neighbor != null){
        line(this.pos.x,this.pos.y,this.neighbor.pos.x,this.neighbor.pos.y);
    }
    ellipse(this.pos.x, this.pos.y, 20, 20);
  }
}
