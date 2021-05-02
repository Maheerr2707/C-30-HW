class Box {
  constructor(x,y) {
    var options = {
        restitution:0.8,
        density:0.4,
        friction:0.2
    }
this.Visiblity = 255
this.image = loadImage("wood1.png")

    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle)

    imageMode(CENTER);
    fill("brown");
    image(this.image,0, 0, this.width, this.height);
    pop()
    }

    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }

  }
};