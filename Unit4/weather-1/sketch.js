// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let city = "Sydney";
let region = "NSW";
let country = "AU";
let bg;
let loadedImage = false;
let scale = 3;
function setup() {
  // HERE is the call to get the weather. We build the string first.
  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q="+city+","+region+","+country+"&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US


 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx

  let myIDString = "appid=98ac55599a8149e747f9e49293c34e52" ;

  let myTotalString = myCityString + myIDString;
  createCanvas(320*scale, 168*scale);

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}
;
function gotData(data) {
    if(data != weather){
        weather = data;
        let countryCode = weather.sys.country;
        bg = loadImage("https://flagcdn.com/w320/"+countryCode.toLowerCase()+".png");
    }
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;

}
function draw() {
  switch (state) {

    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      background(bg);
      fill("black");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("the weather is currently " + weather.weather[0].description,20,50);


      // cloud
      fill("white");
      noStroke();
      ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
