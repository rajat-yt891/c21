var movingrect;
var fixedrect;
var box1, box2;

function setup() {
  createCanvas(800,400);
fixedrect = createSprite(400, 200, 50, 50);
fixedrect.shapeColor = "green";
fixedrect.velocityX = -2;
movingrect = createSprite(200, 200, 50, 50);
movingrect.shapeColor = "green";
movingrect.velocityX = 2;
box1 = createSprite(600, 100, 60, 60);
box1.shapeColor = "yellow";
box1.velocityY = 2;
box2 = createSprite(600, 300, 60, 60);
box2.shapeColor = "yellow";
box2.velocityY = -2;
}

function draw() {
  background(255,255,255);  
  //movingrect.x = mouseX;
  //movingrect.y = mouseY;
     if (istouching(movingrect, fixedrect)) {
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
    else {
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
    }
    bounceoff(box1, box2);
  drawSprites();
}

