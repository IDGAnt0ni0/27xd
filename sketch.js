
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var box1;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,100,230,20);
	bob1 = new bob(500,450,60);
	//bob2 = new bob(360,575,40);
	//bob3 = new bob(400,575,40);
	//bob4 = new bob(440,575,40);
	//bob5 = new bob(480,575,40);

	ground = new Ground(600,height,1200,20);

	box1 = new Box(740,320,70,70);
    box2 = new Box(640,320,70,70);
	box3 = new Box(740,240,70,70);
    box4 = new Box(640,240,70,70);
	box5 = new Box(640,400,70,70);
	box6 = new Box(640,400,70,70);
	box7 = new Box(640,580,70,70);
	box8 = new Box(640,580,70,70);
	box9 = new Box(640,660,70,70);
	box10 = new Box(640,660,70,70);
	box11 = new Box(640,740,70,70);
	box12 = new Box(640,740,70,70);
	
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	//rope2=new rope(bob2.body,roofObject.body,-40, 0)
	//rope3=new rope(bob3.body,roofObject.body,0, 0)
	//rope4=new rope(bob4.body,roofObject.body,40, 0)
	//rope5=new rope(bob5.body,roofObject.body,80, 0)
	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
 // rope2.display();
 // rope3.display();
 // rope4.display();
 // rope5.display();

  bob1.display();
 // bob2.display();
 // bob3.display();
 // bob4.display();
 // bob5.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();


  ground.display();
  
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}





