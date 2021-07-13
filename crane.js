class Crane {
    constructor(body1,point2){
     var options ={
      length:10,
      stiffness:0.01,
      bodyA:body1,
      pointB:point2
     }
     this.crane = Constraint.create(options);
     World.add(world,this.crane);
    }
    display(){
     if (this.crane.bodyA!=null){
      var pointA = this.crane.bodyA.position;
      var pointB = this.crane.pointB;
      strokeWeight(4);
      line(pointA.x,pointA.y,190,75);

    }
    }
    fly(){
      this.crane.bodyA=null;
    }
    attach(body){
    this.crane.bodyA=body
    }}