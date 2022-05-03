var bubbles = [];
let url = "";
function setup() {
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
  let key = "1Zfvy1UlmvXyqFgH3XDefi2PEF3w0q4H7zFi1mZhRs0w";
  url = "https://opensheet.elk.sh/" + key + "/1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);
  angleMode(DEGREES);
  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console
  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    let tempBubble = new Bubble(
            data[i]["What is your name?"],
            data[i]["Where is your Recycling Bin?"],
            data[i]["How many files are still in there? (1 - Empty, 10 - Overfull)"]);
    bubbles.push(tempBubble); // THESE NEED TO MATCH SPREADSHEET
  }
}

function draw() {
  background("teal");
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }

}

// my Bubble class
class Bubble {
  constructor(name, bin, number) {
    // only the order of these parameters matters!
    this.name = name;
    this.bin = bin;
    this.number = number;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {

    if(dist(this.pos.x,this.pos.y,mouseX,mouseY)>60){
      strokeWeight(4);
      stroke("red");
      noFill();
      ellipse(this.pos.x, this.pos.y+10, 120, 120);
      noStroke();
      fill("white");
      text(
        this.name + "\n" + this.bin + "\n" + this.number,
        this.pos.x,
        this.pos.y
      );
      this.pos.add(this.vel);
    }
    else{
      strokeWeight(4);
      stroke("red");
      noFill();
      ellipse(this.pos.x, this.pos.y+10, 120, 120);
      fill('orange');
      arc(this.pos.x, this.pos.y+10, 120, 120, 270, 270+(360/this.number/10), PIE);
      noStroke();
      fill("white");
      text(
        this.name + "\n" + this.bin + "\n" + this.number,
        this.pos.x,
        this.pos.y
      );
    }

    if (this.pos.x > width) this.pos.x = 0 ;

  }


}
