
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  //creating monkey
  monkey=createSprite(250,350,0,0);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;

  
  ground=createSprite(400,350,1000000,10) 
  ground.velocityX=-5
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
  
  
 score=0 
 
 
}


function draw() {
  background("white");
  
  text("BANANAS:"+score,300,50)
  
  monkey.collide(ground);
  if(keyDown("space")&&monkey.y>=314){
    monkey.velocityY=-15
  }
  
  monkey.velocityY=monkey.velocityY+0.7;
  
  if(ground.x<0){
     ground.x=ground.width/2;
  
  }
   if(frameCount% 300 ===0){
     obstacles();  
  }
  
  if(monkey.isTouching(FoodGroup)){
    score=score+1;
    FoodGroup.destroyEach();
    
  }
  if(monkey.isTouching(obstacleGroup)){
    ground.velocityX=0
    monkey.velocityY=0
   obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0); 
  }
  
  console.log(monkey.y)
  
 food();
  

  drawSprites();
}


function obstacles(){
    obstacle=createSprite(600,332,0,0);
    obstacle.addImage("rock",obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-10
    obstacle.lifeTime=-1
   obstacleGroup.add(obstacle);
    
}

function food(){
if(frameCount% 100===0){
   banana=createSprite(600,Math.round(random(150,200)),0,0);
   banana.addImage("eat",bananaImage);
   banana.scale=0.06;
   banana.velocityX=-12
   banana.lifeTime=-1
   FoodGroup.add(banana);
}  


} 





