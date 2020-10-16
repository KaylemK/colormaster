var ground,fireball,fg,fg2,player,fireball2,ray,move,eye,eye2,mouth,rand,s,d,gameState,sel,play;
var mario,ghost;
var heart;
function setup() {
  createCanvas(800,400);
  play=createGroup();
  ground = createSprite(400, 300, 550, 20);
  ground.shapeColor=color(0,0,0);

  mario = createSprite(400,200,30,30);
  mario.shapeColor=color(255,0,0);
play.add(mario);

  fireball=createSprite(10000,10000,1,1);
  fireball2=createSprite(10000,10000,1,1);
player = createSprite(400,100,80,80);
player.shapeColor=color(random(0,255),random(0,255),random(0,255));

  fg=createGroup();
fg2=createGroup();
d=createGroup();
  ray=100;
  heart=400;
  gameState="play";
  sel=1;
}

function draw() {
  background(255,255,255)

  






if(gameState==="over"){

}else{

  if(World .frameCount %1 === 0){
  player.shapeColor=color(random(0,255),random(0,255),random(0,255));
  }
//mario
if(keyDown("a")){
  mario.x=mario.x-6;
}
if(keyDown("d")){
  mario.x=mario.x+6;
}
if(keyWentDown("space")){
  mario.y=mario.y-10;
mario.velocityY=-10;

}
if(mouseWentDown("leftButton")&&keyDown("d")){
  fireball = createSprite(mario.x,mario.y,10,10);
  fireball.velocityX=10;
  fireball.shapeColor=color(255,0,0);
  fireball.lifetime=50;
fg.add(fireball);
}
if(mouseWentDown("leftButton")&&keyDown("a")){
  fireball = createSprite(mario.x,mario.y,10,10);
  fireball.velocityX=-10;
  fireball.shapeColor=color(255,0,0);
  fireball.lifetime=50
  fg.add(fireball);
}
if(keyWentDown("w")){
  fireball2 = createSprite(mario.x,mario.y,20,20);
  fireball2.velocityY=-20;
  fireball2.shapeColor=color(255,0,0);
  fireball2.lifetime=20;
  fg.setVelocityYEach(-10);
  fg.add(fireball2);
}
if(keyWentDown("s")){
  fg.setVelocityYEach(10);
}
if(keyDown("e")&&ray>0){
fireball = createSprite(mario.x+80,mario.y,130,90);
fireball.velocityX=100;
fireball.shapeColor="red";
fg2.add(fireball);
fireball.lifetime=10;
ray=ray-1;
text ("Ray Power: "+ray,mario.x,mario.y-50);
}
if(keyDown("space")){
  mario.velocityY=mario.velocityY+0.2;
}
else(mario.velocityY=mario.velocityY+1
  )
if(fg.collide(player)){
 heart=heart-20;
  
}
if(fg2.collide(player)){
  heart=heart-5;
   
 }
if(heart===0){
  player.destroy();
  fg.destroyEach();
  fg2.destroyEach();
heart=-1;


}
if(d.collide(mario)){
 gameState="over";
   
 }

fireball2.x=mario.x;
mario.collide(ground);
if(heart>0){
text ("Health: "+heart,300,50,textSize(50));
textSize(20);
text("Color King",player.x-45,player.y-50);
text("You",mario.x-20,mario.y-20);
}
if(World .frameCount %10 === 0){
  
move=random(1,10);
move=Math.round(move);

}

if(heart<0){
gameState="gg";
}else{
if(player.x<100){
  player.velocityX=10;
} else if(move===1){
  player.velocityX=-10;
}
 if(move===2){
  player.velocityX=0;
}
if(player.x>700){
  player.velocityX=-10;
} else if(move===3){
  player.velocityX=10;
}
if(player.y>350){
  player.velocityY=-10;
} else if(move===4){
  player.velocityY=10;
}
if(move===5){
  player.velocityY=0;
}
if(player.y<50){
  player.velocityY=10;
} else if(move===6){
  player.velocityY=10;
}
if(move===7&& World .frameCount %10 === 0){
  
  fireball = createSprite(player.x,player.y,20,20);
  fireball.velocityX=10;
  fireball.shapeColor=color(random(0,255),random(0,255),random(0,255));
  d.add(fireball);
}
if(move===8&& World .frameCount %10 === 0){
  
  fireball = createSprite(player.x,player.y,20,20);
  fireball.velocityX=-10;
  fireball.shapeColor=color(random(0,255),random(0,255),random(0,255));
  d.add(fireball);
}
if(move===9){
  rand = random(1,2);
  rand=Math.round(rand);
  if(rand===2){
    player.y=100;
    fireball = createSprite(player.x,player.y,40,40);
  fireball.velocityY=2;
  fireball.shapeColor=color(random(0,255),random(0,255),random(0,255));
  player.x=random(1,800);
  d.add(fireball);
  }
}
if(move===10){
  player.y=400;
  player.x=mario.x;
  fireball = createSprite(player.x,player.y+20,40,40);
fireball.velocityY=-4;
fireball.shapeColor=color(0,0,0);
d.add(fireball);
}

}

}


if(gameState==="over"){
  text ("Defeat",350,100,textSize(50));

}







if(gameState==="gg"){
  text ("Victory Thank you for Playing",50,100,textSize(50));
}

  drawSprites();
}