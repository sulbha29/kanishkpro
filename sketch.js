var player,player_running,playeridle,playerlandattack;
var ground,groundimg;
var invisibleground;
function preload(){
  player_running=loadAnimation("IMAGES/run01.png","IMAGES/run02.png","IMAGES/run03.png","IMAGES/run04.png","IMAGES/run08.png")
  groundimg=loadImage("IMAGES/ground2.png");
  playeridle=loadAnimation("IMAGES/idle01.png","IMAGES/idle02.png","IMAGES/idle03.png","IMAGES/idle04.png","IMAGES/idle05.png")
  playerlandattack= loadAnimation("IMAGES/AttackB01.png","IMAGES/AttackB02.png","IMAGES/AttackB03.png",
  "IMAGES/AttackB04.png","IMAGES/AttackB05.png");
}

function setup(){
  createCanvas(1400,600);
  player= createSprite(300,550,100,150);
player.addAnimation("player",playeridle);
player.scale=5;
ground= createSprite(700,570,1400,20);
ground.addImage(groundimg);
invisibleground= createSprite(700,580,1400,10);
invisibleground.visible=false;
 
}

function draw(){
  background(0);
  drawSprites();
  player.collide(invisibleground);
 if(keyDown("RIGHT_ARROW")){
    player.addAnimation("player",player_running);
    player.x= player.x+20;
}
else{
  player.addAnimation("player",playeridle);
}
if(keyWentDown("LEFT_ARROW")){
  player.addAnimation("player",player_running);
  player.x= player.x-20;
}
else{
  player.addAnimation("player",playeridle);
}

if(keyDown("space") ){
  player.addAnimation("playerattacking",playerlandattack);
player.velocityY = -14;
}

player.velocityY = player.velocityY + 0.8;

}

