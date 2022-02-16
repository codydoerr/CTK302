function setup() {
  createCanvas(500, 500);
}
let state = 0;
let timer = 0;
function draw() {
    switch (state) {
        case 0:
            background('yellow');
            timer++;
            text(round(timer/60,2),10,10);
            if(timer > 3*60){
                timer = 0;
                state++;
            }
            break;
        case 1:
            background('grey');
            timer++;
            text(round(timer/60,2),10,10);
            if(timer > 6*60){
                timer = 0;
                state++;
            }
            break;
        case 2:
            background('pink');
            timer++;
            text(round(timer/60,2),10,10);
            if(timer > 10*60){
                timer = 0;
                state++;
            }
            break;
        default:
            state = 0;
    }
}
