
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1 = new Paper(200,680,50);
	ground1 = new Ground(0,700, 1650, 30);
	leftD = new Dustbin(530,640, 20, 100);
	middleD = new Dustbin(615,680, 170, 20);
	rightD = new Dustbin(700,640, 20, 100);
	Engine.run(engine);
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  ground1.display();
  
  middleD.display();
  leftD.display();
  rightD.display();
  
  drawSprites();
  
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x : 415, y: -285})
	}
}


