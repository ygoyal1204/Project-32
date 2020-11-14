class Polygon{
    constructor(x, y, radius){
        var options ={
            density: 2.5,
            restitution: 0.5,
            friction: 1.2
          }
          this.radius = radius;
          this.x = x;
          this.y = y;
          this.image = loadImage("polygon3.png");
          this.body = Bodies.circle(this.x, this.y, this.radius, options);
          World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0, 0, this.radius*2, this.radius*2);
    }
}