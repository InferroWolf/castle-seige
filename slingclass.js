class Sling {
  constructor(body1,point2){
   var options ={
    length:10,
    stiffness:0.04,
    bodyA:body1,
    pointB:point2
   }
   this.slingshot = Constraint.create(options);
   World.add(world,this.slingshot);
  }
  display(){
   if (this.slingshot.bodyA!=null){
    var pointA = this.slingshot.bodyA.position;
    var pointB = this.slingshot.pointB;
    strokeWeight(4);
   if (pointA.x<210){
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    line(pointA.x,pointA.y,190,75);
   }
   else {
    line(pointA.x+25,pointA.y,pointB.x,pointB.y);
   }
  }
  }
  fly(){
    this.slingshot.bodyA=null;
  }
  attach(body){
  this.slingshot.bodyA=body
  }
}