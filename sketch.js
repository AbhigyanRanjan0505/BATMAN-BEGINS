const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas, drop, lightI1, lightI2, lightI3, lightI4, light, man, drops = [], maxDrops = 100;

function preload() {
    lightI1 = loadImage("../BATMAN-BEGINS/images/thunderbolt/1.png");
    lightI2 = loadImage("../BATMAN-BEGINS/images/thunderbolt/2.png");
    lightI3 = loadImage("../BATMAN-BEGINS/images/thunderbolt/3.png");
    lightI4 = loadImage("../BATMAN-BEGINS/images/thunderbolt/4.png");
}

function setup() {
    canvas = createCanvas(500, displayHeight - 111);

    engine = Engine.create();
    world = engine.world;

    man = new Umbrella(width / 2, height - 100);

    Engine.run(engine);
}

function draw() {
    background("Black");

    Engine.update(engine);

    if (frameCount % 20 === 0) {
        light = createSprite(width / 2, 0, 0, 0);

        var rand = Math.round(random(1, 4));

        switch (rand) {
            case 1: light.addImage(lightI1); break;
            case 2: light.addImage(lightI2); break;
            case 3: light.addImage(lightI3); break;
            case 4: light.addImage(lightI4); break;
            default: break;
        }
    }

    if (frameCount % 21 === 0) {
        light.destroy();
    }


    if (frameCount % 7 === 0) {
        for (var i = 0; i < maxDrops; i++) {
            drops.push(new Drops(random(0, 500), random(0, 400)));
        }
    }

    man.display();

    for (var a = 0; a < drops.length; a++) {
        drops[a].display();
    }

    drawSprites();
}  
