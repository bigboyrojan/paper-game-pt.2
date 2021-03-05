
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var trash;
var crumbledpaper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground = new Ground(350,700,900,25);

 trash = new dustbin(593,680,15,50);
trash.scale = 0.1;
crumbledpaper = new Paper(150,675,70);
 crumbledpaper.scale = 0.1;
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  ground.display();
  trash.display();
  crumbledpaper.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(crumbledpaper.body,crumbledpaper.body.position,{x:130,y:-145});
  }
}
