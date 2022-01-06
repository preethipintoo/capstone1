var reset, resetImg;
var spiderweb, spiderwebsGroup, spiderwebImg;
var  skull, skullImg;

var ground, groundImg;
var invisibleGround;

var bat, batsGroup, batImg;

var gameState = PLAY;
var PLAY = 1;
var END = 0;

function preload(){

skullImg = loadImage("skull2.png");

groundImg = loadImage("ground.png");

spiderwebImg = loadImage("spiderweb.jpg");

batImg = loadImage("bat.png");

resetImg = loadImage("reset button.png");
}


function setup() {
createCanvas(450,400);


invisibleGround = createSprite(150,369,450,10);
 
skull = createSprite(30,335,50,50);
skull.addImage("skull", skullImg);
skull.scale = 0.2;

spiderwebsGroup = new Group();
batsGroup = new Group();

ground = createSprite(150,380);
ground.addImage("ground", groundImg);
 
}


function draw() {
background("white")
if(gameState === PLAY){
  if(keyDown("space")&& skull.y >= 334) {
    skull.velocityY = -15;
    }
    skull.velocityY = skull.velocityY + 0.8;
  
    ground.velocityX = -4;
    if (ground.x < 150){
    ground.x = ground.width/2;
    }
  
    skull.collide(invisibleGround);
    spider()
    bats()
    if (spiderwebsGroup.isTouching(skull)||batsGroup.isTouching(skull)){
      gameState = END;
        }
    
    }
    


  drawSprites();
}

 

  //invisibleGround.depth = invisibleGround.depth +1;

  //spider();  

  //bats();

  //skull.depth = skull.depth +1;
  //ground.depth = skull.depth
  //invisibleGround.visible = false;

  //if(frameCount % 100 === 0){
  //ground.velocityX = ground.velocityX *0.5;
  //batsGroup.setVelocityXEach = batsGroup.setVelocityXEach *0.5;
  //spiderwebsGroup.setVelocityXEach = spiderwebsGroup.setVelocityXEach *0.5;
  //}

  
   
    
 // } 

  


//}


function bats() {
if (frameCount % 60 === 0) {
bat = createSprite(600,100,40,10);
bat.y = Math.round(random(10,100));
bat.addImage("bat",batImg);
bat.scale = 0.2;
bat.velocityX = -4;
batsGroup.add(bat);
}
}

function spider(){

if(frameCount % 60 === 0){
spiderweb = createSprite (400,335);
spiderweb.addImage("spiderweb", spiderwebImg);
spiderweb.scale = 0.1;
spiderweb.velocityX = -4;
spiderweb.depth = spiderweb.depth -1;
spiderwebsGroup.add(spiderweb);
}

}