var dustbinIMG,dustbinSprite,paperIMG,paperSprite;
var dustbinBody,paperBody;
var d1,d2,d3;
var paper;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(600, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
	ground.shapeColor=("brown");
	 World.add(world, ground);
	 
	dustbin = new Dustbin(100,100);
	dustbin.scale = 0.5;
	
	paper = new Paper(100,590,35);
	paper.scale = 0.2;
}

function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(100);
  paper.display();
  dustbin.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:8,y:-20})
}
}
