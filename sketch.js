var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(100,590,200,20)
surface1.shapeColor = "red"

surface2 = createSprite(300,590,200,20)
surface2.shapeColor = "white"

surface3 = createSprite(500,590,200,20)
surface3.shapeColor = "blue"

surface4 = createSprite(700,590,200,20)
surface4.shapeColor = "purple"



    //create box sprite and give velocity
    BoxSprite = createSprite(random(20,750),100,50,50)
    BoxSprite.velocityX = 2
    BoxSprite.velocityY = 2


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

if (BoxSprite.isTouching(surface1)){
BoxSprite.shapeColor = "red"
BoxSprite.setVelocity(0,0)
}

if (BoxSprite.isTouching(surface2)){
    BoxSprite.shapeColor = "white"
    BoxSprite.setVelocity(0,0)
    }

    if (BoxSprite.isTouching(surface3)){
        BoxSprite.shapeColor = "blue"
        BoxSprite.setVelocity(0,0)
        }

        if (BoxSprite.isTouching(surface4)){
            BoxSprite.shapeColor = "purple"
            BoxSprite.setVelocity(0,0)
            }
drawSprites()
    //add condition to check if box touching surface and make it box
}
