class Tr{
    constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.06,
        length: 10
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    

    display(){
       var pointA = this.sling.bodyA.position;
       var pointB = this.pointB;
            push()
            strokeWeight(20)
            line(pointB.x,pointB.y,bodyA.x,bodyA.y)
            pop()
        
    }
    
}