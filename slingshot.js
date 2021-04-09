class SLINGSHIT{
    constructor(a,b){

        var ops = {
            bodyA:a,
            pointB:b,
            stiffness:0.3,
            length:150
        }

        this.sling = Constraint.create(ops);
        this.pointb = b;
        World.add(world,this.sling);
    }

    display(){
        var posA = this.sling.bodyA.position;
        var posB = this.pointb;
        line(posA.x,posA.y,posB.x,posB.y);
        
    }
}