var movingRect, fixedRect;
var obj1, obj2,obj3,obj4; 

function setup() {
  createCanvas(800,400);

movingRect= createSprite(400, 200, 50, 50);
fixedRect= createSprite(600, 350, 50, 50);
obj1= createSprite(100, 100, 50, 50);
obj2= createSprite(200, 100, 50, 50);
obj3= createSprite(300, 100, 50, 50);
obj4= createSprite(400, 100, 50, 50);

movingRect.shapeColor= "Green";
fixedRect.shapeColor="Green";
obj1.shapeColor="Green";
obj2.shapeColor="Green";
obj3.shapeColor="Green";
obj4.shapeColor="Green";

movingRect.velocityY= -5;
fixedRect.velocityY= +5;



}

function draw() {
  background(255,255,255);  
  //movingRect.x= mouseX;
  //movingRect.y= mouseY;
 


if (isTouching(movingRect, obj2)){
  movingRect.shapeColor= "blue";
  obj2.shapeColor="blue";
}
else{
  movingRect.shapeColor= "Green";
  obj2.shapeColor="Green";
}

  bounceOff(movingRect, fixedRect);
  drawSprites();

}

function bounceOff(object1,object2)
{
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2)
    {
      object1.velocityX= object1.velocityX*(-1);
      object2.velocityX= object1.velocityX*(-1);
    }
    if(object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2)
      {
        object1.velocityY= object1.velocityY*(-1);
      object2.velocityY= object1.velocityY*(-1);
      }
}



function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2)
   {
    return true;
   }
   else { 
     return false;
   }
}