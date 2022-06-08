
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var leftwall
var rightwall

var ball

var daworld, daengine

function preload()
{
 


}

function setup() {
	createCanvas(800, 700);
	daengine=Engine.create()
	daworld = daengine.world;
	
	var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2,
}

	

	//Create the Bodies Here.
	ball = Bodies.circle(100,100,50,ball_options)

 ground = new Ground (200,390,400,20)
rightwall = new Ground(100,100,100,100)
leftwall = new Ground(200,100,100,100)
// how do i define world
	World.add(daworld,ball,ground,rightwall,leftwall)


Engine.run(daengine);
  
}


function draw() {
  rectMode(CENTER);
ellipseMode(CENTER) 
  background(0);
  
ellipse(ball.position.x,ball.position.y,50)
rect(ground.position.x,ground.position.y,100,100)
rect(rightwall.position.x,rightwall.position.y,100,100)
rect(leftwall.position.x,leftwall.position.y,100,100)


  drawSprites();
 
}



