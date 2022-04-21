var num;
var distance;
var font1, font2;
var locationData;
let myMap;
let canvas;
let json = {};
var locationID;
const mappa = new Mappa('Leaflet');
let url = "";

// Lets put all our map options in a single object
const options = {
    lat: 33,
    lng: 130,
    zoom: 1.5,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}


function preload() {
    //font1 = loadFont("assets/Mohave-Light.ttf");
    //loadJSON('\coordinates.json');
}

function setup() {
    let key = "1e-0nE4sm9w9kYBfXxYwOcWoPrSUiML4IKIInTK3ppAs";
    url = "https://opensheet.elk.sh/" + key + "/1"; // here I'm making the string for loadJSON.
    loadJSON(url, gotData);
    canvas = createCanvas(windowWidth, windowHeight);
    num = 0;
    setInterval(updateLocations,30000)
    // intervalCurrentPosition(positionPing, 5000); // this is what calls positionPing function
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);
}

function draw() {
    clear();
    const itoshima = myMap.latLngToPixel(33.511777, 130.146019);
    // Using that position, draw an ellipse
    ellipse(itoshima.x, itoshima.y, 5, 5);
}

function gotData(data) {
    console.log(data); // Print the data in the console
}

function beginEcho() {
    locationData = getCurrentPosition();
    locationID++;
    json = {
        lat:locationData.latitude,
        long:locationData.longitude,
        id:locationID
    };
    let tempJSON = { Name: 'Cody', Color:"Red",Lat:22,Long:22};
    save(tempJSON,'coordinates.json');
    // saveJSON(json, '../coordinates.json');
}

function updateLocations() {
    // textSize(36);
    num++;

    distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');

    background("#2452d1");
    fill("white");
    text("lat: " + position.latitude, 10, 40);
    text("long: " + position.longitude, 10, 90);
    text("number of updates " + num, 10, 140);

    text("you have moved " + distance, 10, 190);
    fill('red');
    text("remember to take a screenshot before you take a picture of your surroundings!", 10, 260, 400);

}
