
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;


var paperBall, ground1, bin3;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.

	bin3 = new bin(1200,650)
	paperBall = new paper(200,450,40)

	ground1 = new ground(width/2,670,width,20)
	
	//bin1 = new bin(980,530,30,200)
	//bin2 = new bin(1080,630,200,30)
	
	var render = Render.create({
		element: document.body,
		engine: engine, 
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);
}


function draw() {
	rectMode(CENTER)
  background("white");
  
  bin3.display();
  paperBall.display();
  ground1.display();
 
  abc() 

  drawSprites();
}

function abc() {
	if (keyDown("up")) {

	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:20,y:-20});

  
	}
}




