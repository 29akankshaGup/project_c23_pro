class Rod{

    constructor(x,y,width,height){

        this.redBaseBody=Bodies.rectangle(x,y,width,height,{isStatic:true,friction:1.0,density:2});
        this.width=width;
        this.height=height;
        World.add(world, this.redBaseBody);

    }

    display(){
        rectMode(CENTER);
        var pos=this.redBaseBody.position;
        push();
        fill("red");
        translate(pos.x,pos.y);
        rect(0,0,this.width,this.height);
        pop();

    }
}