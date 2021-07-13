const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1500,1000);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(800,537,408,25);
  brick1=new Box(621,500,50,50);
  brick2=new Box(672,500,50,50);
  brick3=new Box(723,500,50,50);
  brick4=new Box(774,500,50,50);
  brick5=new Box(825,500,50,50);
  brick6=new Box(876,500,50,50);
  brick7=new Box(927,500,50,50);
  brick8=new Box(978,500,50,50);
  brick21=new Box(672,449,50,50);
  brick22=new Box(723,449,50,50);
  brick23=new Box(774,449,50,50);
  brick24=new Box(825,449,50,50);
  brick25=new Box(876,449,50,50);
  brick26=new Box(927,449,50,50);
  brick31=new Box(723,399,50,50);
  brick32=new Box(774,399,50,50);
  brick33=new Box(825,399,50,50);
  brick34=new Box(876,399,50,50);
  brick41=new Box(774,349,50,50);
  brick42=new Box(825,349,50,50);
  brick51=new Box(800,310,200,25);
  ironball=new IronBall(100,10,40);
  crane=new Crane(ironball.body,{x:223,y:81});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick21.display();
  brick22.display();
  brick23.display();
  brick24.display();
  brick25.display();
  brick26.display();
  brick31.display();
  brick32.display();
  brick33.display();
  brick34.display();
  brick41.display();
  brick42.display();
  brick51.display();
  ironball.display();
  crane.display();
}

function mouseDragged(){
  if(release===0){
  Matter.Body.setPosition(ironball.body,{x:mouseX,y:mouseY});
   }
  }
  
  function mouseReleased(){
  release=1;
  crane.fly();
  }
  function keyPressed(){
  if (keyCode===32){
  crane.attach(ironball.body);
  }
  }