var fixedRect, movingRect;

var rect1;

function preload() {
  green = loadImage("green.png");
  yellow = loadImage("yellow.png");
}

function setup() {
  createCanvas(1200,800);
  /* fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true; */
  movingRect = createSprite(1100, 400,80,30);
  movingRect.addImage(green);
  //movingRect.shapeColor = "green";
  //movingRect.debug = true;

  rect1 = createSprite(100, 400, 50, 80);
  rect1.addImage(green);
  //rect1.shapeColor = "green";
  //rect1.debug = true;

  rect2 = createSprite(400,100,50,80);
  rect2.addImage(yellow);
 // rect2.shapeColor = "blue";

  rect3 = createSprite(400,700,50,80);
  rect3.addImage(yellow);
 // rect3.shapeColor = "blue";

  movingRect.velocityX = -5;
  rect1.velocityX = +5;
  rect2.velocityY = 3.5;
  rect3.velocityY = -3.5;
}

function draw() {
  background(255);  
  bounceOff(movingRect,rect1);
  bounceOff(rect2,rect3);
  drawSprites();
}

function bounceOff(arg1,arg2) {
  if (arg1.x - arg2.x < arg2.width/2 + arg1.width/2
    && arg2.x - arg1.x < arg2.width/2 + arg1.width/2) {
    arg1.velocityX = arg1.velocityX * (-1);
    arg2.velocityX = arg2.velocityX * (-1);
  }
  if (arg1.y - arg2.y < arg2.height/2 + arg1.height/2
    && arg2.y - arg1.y < arg2.height/2 + arg2.height/2){
    arg1.velocityY = arg1.velocityY * (-1);
    arg2.velocityY = arg2.velocityY * (-1);
  }
}