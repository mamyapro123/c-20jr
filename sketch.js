


 var sleep,sleeping
 var astronaut
 var bg
 var brush,brushing
 var drink,drinking
 var eat,eating
 var bath,bating
 var gym,gyming

 function preload() {
sleep=loadAnimation("sleep.png")
bg=loadImage("iss.png")
brush= loadAnimation("brush.png")
drink= loadAnimation("drink1.png","drink2.png")
eat= loadAnimation("eat1.png","eat2.png")
bath= loadAnimation("bath1.png","bath2.png")
gym= loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
}

function setup() {
  createCanvas(400,400);
astronaut=createSprite(200,200,20,20);   
astronaut.addAnimation("sleeping",sleep);  
astronaut.scale=0.1

astronaut=createSprite(200,200,20,20);
astronaut.addAnimation("brushing",brush);
astronaut.scale=0.1

astronaut=createSprite(200,200,20,20);
astronaut.addAnimation("drinking",drink);
astronaut.scale=0.1

astronaut=createSprite(200,200,20,20);
astronaut.addAnimation("eating",eat);
astronaut.scale=0.1

astronaut=createSprite(200,200,20,20);
astronaut.addAnimation("bathing",bath);
astronaut.scale=0.1

astronaut=createSprite(200,200,20,20);
astronaut.addAnimation("gyming",gym);
astronaut.scale=0.1
}






function draw() {
  background(bg);  
  
if(keyDown("LEFT_ARROW")){
astronaut.addAnimation("sleeping",sleep);
astronaut.changeAnimation("sleeping");
astronaut.y=350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
if(keyDown("RIGHT_ARROW")){
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing");
astronaut.y=350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;

}
if(keyDown("UP_ARROW")){
astronaut.addAnimation("drinking",drink);
astronaut.changeAnimation("drinking");
astronaut.y=350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;  
}
if(keyDown("DOWN_ARRow")){
astronaut.addAnimation("eating",eat);
astronaut.changeAnimation("eating");
astronaut.y=350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}

if(keyDown("A")){
astronaut.addAnimation("bathing",bath);
astronaut.changeAnimation("bating");
astronaut.y=350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
if(keyDown("R")){
astronaut.addAnimation("gyming",gym);
addAnimation.changeAnimation("gyming");
addAnimation.velocityX = 0;
addAnimation.velocityY = 0; 
}
  drawSprites();
}