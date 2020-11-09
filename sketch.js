const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,
block15,block16;
var bg;
var PolygonObj;
var slingShot;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
   var stand=new Stand(600,400,1200,20);
   fill("brown");
   var block1=new Block(600,400,20,20);
   fill("red");
   var block2=new Block(620,400,20,20);
   fill("green");
   var block3=new Block(640,400,20,20);
   fill("blue");
   var block4=new Block(660,400,20,20);
   fill("yellow");
   var block5=new Block(680,400,20,20);
   fill("black");
   var block6=new Block(700,400,20,20);
   fill("blue");
   var block7=new Block(720,400,20,20);
   fill("orange");
   var block8=new Block(620,420,20,20);
   fill("orange");
   var block9=new Block(640,420,20,20);
   fill("blue");
   var block10=new Block(660,420,20,20);
   fill("brown");
   var block11=new Block(680,420,20,20);
   fill("red");
   var block12=new Block(700,420,20,20);
   fill("yellow");
   var block13=new Block(640,440,20,20);
   fill("black");
   var block14=new Block(660,440,20,20);
   fill("green");
   var block15=new Block(680,440,20,20);
   fill("orange");
   var block16=new Block(660,460,20,20);
   fill("blue");
   PolygonObj=new Polygon(200,200,20,20,20,20,20);
   fill("green");
   PolygonObj=Bodies.circle(50,200,20);
   World.add(world,PolygonObj);

   slingShot=new Slingshot(this.PolygonObj,{x:100,y:200});
   
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  PolygonObj.display();
  slingShot.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
   slingshot.attach(PolygonObj.body);
  }

  async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bg.fill("green");
    }
    else{
        bg.fill("gray");
    }

    
  }
}