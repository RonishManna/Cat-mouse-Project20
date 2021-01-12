var gardenImg,catImg,cat,mouseImg,mouse

function preload() {
gardenImg=loadImage("images/garden.png")
catImg=loadImage("images/tomOne.png")

mouseImg=loadImage("images/jerryOne.png")

    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(100,600,10,10)
cat.addImage=(catImg)
mouse=createSprite(300,500,50,50)
mouse.scale=0.2;
mouse.addImage(mouseImg)
}

function draw() {
    background(gardenImg);
text(mouseX+','+mouseY,10,45)
    
    //Write condition here to evalute if tom and jerry collide
keyPressed();
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("catRunning",catImg)
cat.changeAnimation("catRunning")
}
  //For moving and changing animation write code here
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
cat.velocityX=0;
cat.addAnimation("catLastImage",catImg)
cat.scale=0.1;
cat.changeAnimation("catLastImage")
}

}
