class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 15
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       // this.image1=loadImage("sprites/sling1.png");
        //this.image2=loadImage("sprites/sling2.png");
        //this.image3=loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach()
    {
        this.sling.bodyA=polygon.body;
    }
    display(){
        //image(this.image1,200,20);
        //image(this.image2,175,20);
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48, 22, 8);
            if (pointA.x<=220)
            {
                strokeWeight(2);

                line(pointA.x, pointA.y, pointB.x, pointB.y);
                line(pointA.x,pointA.y,pointB.x+20,pointB.y);
               // image(this.image3,pointA.x-25,pointA.y-15,10,30);
            }else 
            {
                strokeWeight(4);

                line(pointA.x, pointA.y, pointB.x, pointB.y);
                line(pointA.x,pointA.y,pointB.x+20,pointB.y);
                //image(this.image3,pointA.x+25,pointA.y-15,10,30);
            }
            
            pop()
     
            
        }
    }
    
}