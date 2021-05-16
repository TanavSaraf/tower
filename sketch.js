const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var plat;
var sling;
var sc;

function setup() {
  createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300, 400, 200, 20);

  box1 = new Box(225, 375, 50, 50);
  box2 = new Box(275, 375, 50, 50);
  box3 = new Box(325, 375, 50, 50);
  box4 = new Box(375, 375, 50, 50);
  box5 = new Box(250, 325, 50, 50);
  box6 = new Box(300, 325, 50, 50);
  box7 = new Box(350, 325, 50, 50);
  box8 = new Box(275, 275, 50, 50);
  box9 = new Box(325, 275, 50, 50);
  box10 = new Box(300, 225, 50, 50);
  plat = new Ground(700, 400, 200, 200);
  polygon = new Polygon(900, 300, 50, 50);
  sling = new SlingShot(polygon.body, { x: 700, y: 200 });
 
  sc=0;
  Engine.run(engine);
}
function draw() {
  background("green");
  Engine.update(engine);
    text("SCORE :"+sc,200,100);
  ground.display();
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
  polygon.display();
  sling.display();
  plat.display();
}
function mouseDragged()
{
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    sling.fly()
}
function keyPressed()
{
    if(keyCode===32)
    {
        sling.attach();
    }
}