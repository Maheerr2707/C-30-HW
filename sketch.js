const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var launcher, slingshot;

 var gamestate = "onsling"

function preload() {
 // backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(350, 305, 300, 20);

    box1 = new Box(320,280,70,70);
    box2 = new Box(400,280,70,70);
    box3 = new Box(320,240,70,70);
    box4 = new Box(400,240,70,70);
    box5 = new Box(320,160,70,70);
    box6 = new Box(400,160,70,70);
    launcher = new Launcher(200,50);
    slingshot = new SlingShot(launcher.body,{x:200, y:50});
}

function draw(){
    background(255);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box5.display();
    launcher.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gamestate!=="launched"){
    Matter.Body.setPosition(launcher.body, {x: mouseX , y: mouseY});
    } 
}

function mouseReleased(){
    slingshot.fly();
   gamestate = "launched" 
}

function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(launcher.body);
    }
}