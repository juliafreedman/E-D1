function setup() {
  createCanvas(displayWidth, displayWidth);
  strokeWeight (0.1);
  stroke(255,255,255,50);
  background(255,255,255);
  frameRate(1.25);
}

function draw() {
  clear();
  translate (30,30);
  var num =10;
  var shift = 40;
  var width= innerWidth-2*30;
  var length= innerWidth - 2*30;
  var sideLen = (displayWidth/num);
  var space = 10;
  var opacity = 50;




  for (var x=0; x< num*sideLen; x= x+sideLen){
     opacity = 100;
    for(var y=0; y <num*sideLen; y=y+sideLen ){
      if (y%2 == 0){
        opacity = 500;
      } else  {
        opacity = 200;
      }
      fill(255,random(0,255),random(0,255),opacity);
      ellipse(random(0,num*sideLen),random(0,num*sideLen), random(-shift,shift))
      ellipse(random(0,num*sideLen),random(0,num*sideLen), random(-shift+10,shift-10));
      ellipse(random(0,num*sideLen),random(0,num*sideLen), random(-shift+20,shift-20))
      }

  }

  //noLoop();
}
