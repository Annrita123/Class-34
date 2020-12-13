const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,ball,sling;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,790,1200,20);
    box1 = new Box(600,650);
    box2 = new Box(650,650);
    box3 = new Box(700,650);
    box4 = new Box(600,700);
    box5 = new Box(650,700);
    box6 = new Box(700,700);
    box7 = new Box(600,750);
    box8 = new Box(650,750);
    box9 = new Box(700,750);
    box10 = new Box(600,500);
    box11 = new Box(650,500);
    box12 = new Box(700,500);
    ball = new Ball(450,500);
    sling = new Sling(ball.body,{x:350,y:400});
}


function draw(){
    background('white');
    Engine.update(engine);
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
     box11.display();
     box12.display();
     ball.display();
     sling.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}