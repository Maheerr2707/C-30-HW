class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      this.pointB = point  
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
    }

    attach(body){
      this.sling.bodyA = body;
  }

    display(){
        if(this.sling.bodyA){
      var posA = this.sling.bodyA.position;
      var posB = this.pointB;
      strokeWeight(4);
       line(posA.x, posA.y, posB.x, posB.y);
  }
 
    }
    fly(){
   this.sling.bodyA = null
   }
}
