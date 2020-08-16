
var drop,rain = []
var backgroundImage

function preload() {
  getImageBasedOnTime()
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  
  for(var i = 0; i <500; i++){
    drop = new Drop(random(0,width),random(0,height))
    rain.push(drop);
  }
}

function draw() {
  if (backgroundImage) {
    background(backgroundImage);  
  }

 for(var i = 0; i < rain.length;i++){
  rain[i].display();
  rain[i].fall();
 }


}
async function getImageBasedOnTime() {
  var response=await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
  var responsejson=await response.json()
  var date=responsejson.datetime
  var hour=date.slice(11,13)
  if (hour>=06 && hour<13) {
    backgroundImage=loadImage("morning.jpg")
  } else {
    backgroundImage=loadImage("night.jpg")
  }
}

