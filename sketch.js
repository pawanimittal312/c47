var obstacle1,coin1,bird,mario;

function preload(){
  mario1=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png");
  groundImg=loadImage("bg2.png");
 bg1=loadImage("bg6.jpg");
 bg2=loadImage("bg4.jpg");
 bg3=loadImage("bg5.jpg");
 birdImg=loadAnimation("bird1(1).png","bird2.png","bird3.png","bird4.png","bird5.png");
 obstacle1Img=loadImage("brick7.jpg");
 obstacle2Img=loadImage("brick8.jpg");
 coinImg=loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png");
}
function setup() {
  createCanvas(1200,400);
  
  
  mario=createSprite(100,370,20,40);
  mario.addAnimation("marioRunning",mario1);
  ground=createSprite(280,440,2400,20);
  ground.addImage(groundImg);

  invisible=createSprite(100,380,100,10);
invisible.visible=false;
  
}

function draw() {
  background(bg1); 
  if(ground.x<250){
    ground.x=700
  }
  ground.velocityX=-4;
  console.log(ground.x);
   if(keyDown("space")){
      mario.velocityY=-13;
     
   }
   mario.velocityY= mario.velocityY + 0.8;
   mario.collide(invisible);

  // coins();
  
  birds();
  obstacles();
  drawSprites();
}

function birds(){
  if(frameCount% 100===0){
    bird=createSprite(1200,Math.round(random(12,250)))
    bird.addAnimation("flying",birdImg);
    bird.velocityX=-6;
    bird.scale=0.5;
  }
}

function obstacles(){
 
if(frameCount% 110===0){
  obstacle1=createSprite(1200,Math.round(random(150,300)));
  obstacle1.velocityX=-5;
     var rand=Math.round(random(1,2))
    switch(rand){
      case 1: obstacle1.addImage(obstacle1Img);
       break;
       case 2: obstacle1.addImage(obstacle2Img);
      break;
      
      default: break;

    }
    obstacle1.scale=0.6;
    for(i=1;i<6;i++){
      coin1=createSprite(1200*i+110,obstacle1.y-50,20,20)
      coin1.velocityX=-5;
      coin1.addAnimation("sparkling",coinImg)
      coin1.scale=0.4;

    }

    
  
}

}
// function coins(){
//   if(frameCount% 110===0){
   
//   }
// }