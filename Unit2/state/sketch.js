function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
}
let state = 0;
function draw() {
    switch (state) {
        case 0:
            background('yellow');
            for(let j = 0;j < 100;j++){
                for(let i = 0;i < 100;i++){
                    push();
                    fill('red');
                    rect(i*40,j*40,i+j,i+j);
                    pop();
                }
            }
            break;
        case 1:
            background('grey');
            let flip = -1;
            let inc = 15;
            let colorState = 1;
            let circleRadius = 50;
            for(let j = 0;j < 1050;j+=inc){
                for(let i = 0;i < 1050;i+=inc){
                    push();
                    switch(colorState){
                        case 1:
                            stroke("grey");
                            fill('red');
                            circle(j,i,circleRadius);
                            break;
                        case 2:
                            stroke("grey");
                            fill('white');
                            circle(j,i,circleRadius);
                            break;
                        case 3:
                            stroke("grey");
                            fill('black');
                            circle(j,i,circleRadius);
                            break;
                        default:
                            colorState = 0;
                            break;
                    }
                    colorState++;

                    pop();
                }
            }

            break;
        case 2:
            let circleSize = 50;
            let incTwo = 10;
            background("black");
            for(let i = 1;i < 200;i+=incTwo){
                for(let j = 1;j < 250;j+=incTwo){
                    for(let k = 1;k < 100;k+=incTwo/2){
                        stroke("black");
                        fill("#FA872D");
                        circle((2*PI*i),(2*PI*j+k),circleSize);
                    }
                }
            }
            break;
        case 3:
            background('red');
            text("case 3", 250, 250);
            break;
        case 4:
            background('blue');
            text("case 4", 250, 250);
            break;
    }
}
function mouseReleased(){
    if(state<4){
        state++;
    }
    else{
        state = 0;
    }
}
