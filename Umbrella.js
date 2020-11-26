class Umbrella {
    constructor(x, y) {
        var options = {
            'isStatic': true,
            'friction': 0.1,
        }
        this.body = Bodies.circle(x, y, 65, options);
        this.image = loadImage("../BATMAN-BEGINS/images/Walking Frame/walking_1.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, (pos.x)-6, (pos.y)+2, 280, 180);
    }
}
