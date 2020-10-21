var fixedRect, movingRect, rect3, rect4,rect5;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "blue";
  //fixedRect.velocityX = 5;
  movingRect = createSprite(600, 200, 80, 50);
  movingRect.shapeColor = "black";
  movingRect.velocityX = -5;
  rect3 = createSprite(100,100,50,50);
  rect3.shapeColor = "red";
  rect4 = createSprite(105,200,50,50);
  rect4.velocityX=5;
  rect4.shapeColor = "yellow";
  rect5 = createSprite(340,130,50,50);
  rect5.shapeColor = "pink";

}

function draw() {
  background(255,255,255);  
  

  
  //movingRect.y = World.mouseY;
  //movingRect.x = World.mouseX;

  

if(isTouching(rect3,movingRect)){
  rect3.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else {
    rect3.shapeColor = "red";
    movingRect.shapeColor = "black";
  }
bounce(rect4,movingRect);



  drawSprites();
}

