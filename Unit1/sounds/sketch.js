let song1;
function preload(){
    song1 = loadSound("assets/lofiLoop.mp3");
}
function setup() {
  createCanvas(500, 500);
  song1.play();
}
function draw() {

}
function mouseReleased(){
    if(song1.isPlaying()){
        song1.pause();
    } else {
        song1.loop();
    }
}
