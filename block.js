class Block{
    constructor(x, y){
        var options ={
            restitution: 0.4,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 40;
        this.Visibility = 255;
        World.add(world, this.body)
    }
    display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, 30, 40);
        pop();
        } else{
            push()
            this.Visibility = this.Visibility -5;
            World.remove(world, this.body);
            tint(255, this.Visibility);
            pop();
        } 
    }

    score(){
        if(this.Visibility < 0 && this.Visibility >-105){
            score ++;
        }
    }
};