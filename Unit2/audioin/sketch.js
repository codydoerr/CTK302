var mic;
var vol = 0;
var approachingVol = 0;

// variables that you might want to tweak
let theLoudestItGets = 0.2; // check your mic inputs and see how loud it gets, put it here.
var ease = 0.01; // how responsive do you want this? Higher numbers mean faster response.

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  background("cyan");

  // get the sound input
  vol = mic.getLevel(); // returned level is between 0 and 1
  print(vol);
  // make a "gradual" easing variable that approaches the original vol
  approachingVol += (vol - approachingVol) * ease;

  // text on the screen for debugging
  textSize(18);
  text(
    "Click the screen first to give\npermission for mic input.\nMy volume is " +
      vol.toFixed(3) +
      "\nApproaching Vol = " +
      approachingVol.toFixed(3),
    10,
    60
  );

  // this moves that first box
  x = map(vol, 0, theLoudestItGets, 0, width);
  text("Current Loudness",x, 200, 50, 50);

  // use y for your "gradual" variable!
  y = map(approachingVol, 0, theLoudestItGets, 0, width);
  //rect(y, 270, 50, 50);
  //circle(y,300,50);
  let volString = "Send me to the End";
  text(volString,y,300);

  // this maps z to between 0 and 3 so you can switch on it.
  z = int(map(approachingVol, 0, theLoudestItGets, 0, 3));
  text("z = " + z, 300, 20);
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
