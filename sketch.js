var ship,shipImg
var sea,seaImg
function preload(){
seaImg = loadImage("sea.png")
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(800,500);
  sea=createSprite(200,180,400,20)
sea.velocityX=-3
sea.addAnimation("sea",seaImg)
  ship = createSprite(50,180,20,50)
  ship.addAnimation("running", shipImg)

ship.scale=0.4
ship.x=50

}

function draw() {
  background("white");
  console.log(sea.x)
  if(sea.x<0){
    sea.x=sea.width/2
  }
 
 drawSprites();
}