const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var division = [];
var divisionHeight=300;
var score =0;
var ground;
var particle;
var gameState = "play";
var count = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }   
}


 
function draw() {
  background("black");
  textSize(25)
 text("Score : "+score,20,30);
 text("500",25,510);
 text("500",100,510);
 text("500",175,510);
 text("500",250,510);
 text("100",325,510);
 text("100",410,510);
 text("100",490,510);
 text("200",565,510);
 text("200",660,510);
 text("200",735,510);
  Engine.update(engine);
  ground.display();
  console.log(mouseX,mouseY);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }

   if(particle!=null)
   {
      particle.display();
       
    if (particle.body.position.y>760)
       {
          if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;
            if ( count>= 5) gameState ="end";                          
             }

             else if (particle.body.position.x < 557 && particle.body.position.x > 334 ) 
             {
                   score = score + 100;
                   particle=null;
                if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 808 && particle.body.position.x > 574 )
             {
                   score = score + 200;
                   particle=null;
                if ( count>= 5)  gameState ="end";

             }   }    }
 

   if(count===5){
     gameState = "end";
     textSize(50);
     text("GAME OVER",250,260);
   }
  
}

function mousePressed(){

  if (gameState!== "end")
  {
count++
particle = new Particle (mouseX,10,10,10);

  }
}

