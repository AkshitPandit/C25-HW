class Dustbin{
    constructor(x,y) {
        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.image = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x,y,options);
        World.add(world,this.body);
    }

    display() {
      imageMode(CENTER);
      image(this.image, 0, 0);
        
    }
}
