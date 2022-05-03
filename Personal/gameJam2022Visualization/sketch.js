var bubbles = [];
var participants = [];
let url = "";
function setup() {
  let key = "1219lLZqNyaKZObCob9qdpQfarmk8cb-MvhxP0cgH6g4";
  url = "https://opensheet.elk.sh/" + key + "/1"; // here I'm making the string for loadJSON.
  loadJSON(url, gotData);
  createCanvas(windowWidth, windowHeight);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console
  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    let tempParticipant = new Participant(
            data[i]["Email Address"],
            data[i]["What is your Name (First and Last)?"],
            data[i]["How likely are you to participate in this jam?"],
            data[i]["Which week is best to host the jam?"],
            data[i]["Are you looking for a team?"],
            data[i]["What are your preferred positions?"]
          );
    participants.push(tempParticipant); // THESE NEED TO MATCH SPREADSHEET
  }
}

function draw() {
  background("teal");
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    textSize(15);
    text(participants[i].name,20,20*i);
  }

}
class Participant{
  constructor(email, name, participation,date,team,position) {
    // only the order of these parameters matters!
    this.email = email;
    this.name = name;
    this.participation = participation;
    this.date = date;
    this.team = team;
    this.position = position;
  }
}
// my Bubble class
class Bubble {
  constructor(email, name, participation,date,team,position) {
    // only the order of these parameters matters!
    this.email = email;
    this.name = name;
    this.participation = participation;
    this.date = date;
    this.team = team;
    this.position = position;
    this.pos = createVector(random(width), random(height));
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
