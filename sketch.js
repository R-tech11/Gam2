const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bg, ma, maImg;
var block, blockImg, lpipe, lpipeImg, spipe, spipeImg, blockGroup

function preload()
{
   bg = loadImage("assets/bg.png");
   maImg = loadImage("assets/standing.png") 
   blockImg = loadImage("assets/block.png")
}

function setup()
{
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    let options = {
        restitution: 0.8
      };

    ma = Matter.Bodies.rectangle(100,560,20,20, options);
    World.add(world, ma);

    blockGroup = new Group();
}

function draw()
{
    background(0,0,0);

    image(bg,0, 0, width, height);
    image(bg,-width, 0, width, height);
    image(bg,width, 0, width, height);
    image(bg,width*2, 0, width, height);
    image(bg,width*3, 0, width, height);
    image(bg,width*4, 0, width, height);

    push();
    image(maImg,ma.position.x, ma.position.y, 70, 70);
    pop();    
    
    image(blockImg,block.position.x, block.position.y, 350, 70);

    camera.position.x = ma.position.x

    moveMa();
    spawnBlocks();

}

function moveMa()
{
    if(keyDown(RIGHT_ARROW))
    {
        ma.position.x += 10
    }


    if(keyDown(LEFT_ARROW))
    {
        ma.position.x -= 10
    }

    if(ma.position.y <= 550)
    {
        ma.position.y += 15;
    }

}

function keyReleased()
{
    
    if(keyDown(UP_ARROW))
    {
        ma.position.y -= 120
    }


}

function spawnBlocks()
{
    for(var i = 0; i > 100; i++)
    {
        block = createSprite(random(width, width*5),560,20,20, options);

        blockGroup.add(block);
    }
}