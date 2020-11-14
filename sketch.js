const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground; 
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var blocks1, blocks2, blocks3, blocks4, blocks5, blocks6, blocks7, blocks8, blocks9;
var polygon, polygonImg;
var launcher;
var backgroundImg;

var score = 0;

function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(1000,500);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, 490, width, 20);
  stand1 = new Ground(490, 400, 250, 20);
  stand2 = new Ground(800, 300, 200, 20);

  block1 = new Block(400, 375);
  block2 = new Block(430, 375);
  block3 = new Block(460, 375);
  block4 = new Block(490, 375);
  block5 = new Block(520, 375);
  block6 = new Block(550, 375);
  block7 = new Block(580, 375);
  block8 = new Block(430, 335);
  block9 = new Block(460, 335);
  block10 = new Block(490, 335);
  block11 = new Block(520, 335);
  block12 = new Block(550, 335);
  block13 = new Block(460, 295);
  block14 = new Block(490, 295);
  block15 = new Block(520, 295);
  block16 = new Block(490, 255);

  blocks1 = new Block(740, 275);
  blocks2 = new Block(770, 275);
  blocks3 = new Block(800, 275);
  blocks4 = new Block(830, 275);
  blocks5 = new Block(860, 275);
  blocks6 = new Block(770, 235);
  blocks7 = new Block(800, 235);
  blocks8 = new Block(830, 235);
  blocks9 = new Block(800, 195);


  polygon = new Polygon(150, 300, 20);
  
  launcher = new Launcher(polygon.body, {x:150, y:300});
}

function draw() {

  if(backgroundImg){
        background(backgroundImg);
  }

  fill("grey");
  textSize(30);
  textAlign(CENTER);
  text("TOWER SEIGE 3", 500, 50);
  textSize(20);
  fill("red");
  text("Drag and release the Hexagonal Stone to destroy the Blocks and score Points!", 500, 80);
  fill("green");
  textSize(25);
  text("Press SPACE to get another chance!", 500, 120);
  fill("grey");
  text("SCORE: "+score, 120, 150);

  Engine.update(engine);

  ground.display();
  stand1.display();
  stand2.display();

  fill("skyblue");
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();

  fill("pink");
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();

  fill("turquoise");
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();

  fill("grey");
  block16.display();
  block16.score();

  fill("skyblue");
  blocks1.display();
  blocks1.score();
  blocks2.display();
  blocks2.score();
  blocks3.display();
  blocks3.score();
  blocks4.display();
  blocks4.score();
  blocks5.display();
  blocks5.score();

  fill("turquoise");
  blocks6.display();
  blocks6.score();
  blocks7.display();
  blocks7.score();
  blocks8.display();
  blocks8.score();
  launcher.display();

  fill("pink");
  blocks9.display();
  blocks9.score();
  polygon.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(polygon.body, {x:150, y: 300});
		launcher.attach(polygon.body);
	}
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=6 && hour<=18){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(hour);
}