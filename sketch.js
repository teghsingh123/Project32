const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,stand;
var box1,box2,box3,box4,box5,box6,box7,box8,box9
var polygon;
var slingshot;
var bg1,bg2,bg3;

var score = 0;

function setup(){
   var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,370,1200,30);
    stand = new Ground(390,245,300,30)
    box1 = new Box(390,235,30,40);
    box2 = new Box(420,235,30,40);
    box3 = new Box(450,235,30,40);
    box4 = new Box(480,235,30,40);
    box5 = new Box(510,235,30,40);
    box6 = new Box(420,195,30,40);
    box7 = new Box(450,195,30,40);
    box8 = new Box(480,195,30,40);
    box9 = new Box(450,155,30,40);
    polygon = new Polygon(50,50,50,50);
    slingshot = new SlingShot(polygon.body,{x:100,y:200});
}

function draw(){
    Engine.update(engine);
    background(bg1,bg2,bg3);
    text("Score:"+score,750,40);
    ground.display();
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    polygon.display();
    slingshot.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg1 = 255;
        bg2 = 255;
        bg3 = 255;

    }
    else{
        bg1 = 0;
        bg2 = 0;
        bg3 = 0;
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
