class Drops {
    constructor(x, y) {
        var options = {
            'friction': 0.1,
        }
        this.body = Bodies.circle(x, y, 6, options);
        this.radius = 6;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }

    update() {
        this.body.position.x = random(0, 500);
        this.body.position.y = random(0, 400);
    }
}