var helicopterIMG, helicopterSprite, packageSprite,packageIMG,b,h;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Lis=[]

function preload()
{
	pic=loadImage("OIP.jpg")
}

function setup() {
	createCanvas(displayWidth*5,displayHeight*5);
	engine = Engine.create();
  world = engine.world;
  ground=createSprite(displayWidth/2,displayHeight/2,displayWidth*5,300)
  apple=createSprite(300,300,200,200)
  apple.addImage("cge",pic)
 
  
camera.position.x=apple.velocity.x
 
 

	

  Engine.run(engine);


button=createButton("play")
  buttonm=createButton("stop")
  button.position(750,300)
  buttonm.position(750,150)
   button.mousePressed(()=>{
    apple.velocityX=5
  
   })
  }


function draw() {
  rectMode(CENTER);
  background("white");


 

  drawSprites();
  

 
}



