class Paper {
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
      this.body = Bodies.circle(x,y,r,options);
      this.x = x;
      this.y = y;
      this.radius = r;
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        fill(255,0,0);
        circle(0,0,this.radius);
        pop();
    }
}