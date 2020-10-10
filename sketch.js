const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1340,380,50,50);
    box2 = new Box(1460,380,50,50);
    box3 = new Box(1400, 300, 50, 50);
    pig1 = new Pig(1400, 380);
    log1 = new Log(1400, 320, 180, PI/2)
    log2 = new Log(1380, 300, 115, PI/7)
    log3 = new Log(1420, 300, 115, -PI/7)
    ground = new Ground(400,height,3000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    pig1.display();
    log1.display();
    log2.display();
    log3.display();
    ground.display();
}