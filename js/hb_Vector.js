class Collision{
    constructor(surfaces, distances){
        var leftCollision = surfaces[0];
        var rightCollision = surfaces[1];
        var topCollision = surfaces[2];
        var bottomCollision = surfaces[3];
        var leftDistance = distances[0];
        var rightDistance = distances[1];
        var topDistance = distances[2];
        var bottomDistance = distances[3];
    }
}

class Hitbox {               //Every entity should have a hitbox for collision purposes
    constructor(x, y, width, height){
        this.top = y;
        this.bottom = y + height;
        this.left = x;
        this.right = x + width;
    }

    collides(hitbox){
        
        return null;
    }

}

class Vector{
    constructor(x, y, xMag, yMag)
    {
        this.x = x;
        this.y = y;
        this.xMag = xMag;
        this.yMag = yMag;
        this.angle = Math.atan((Math.abs(yMag))/(Math.abs(xMag))) * 180/Math.PI;
    }

    getIntersection(hitbox){
        //hitbox is 1, vector is 2
        //b1c2-b2c1/a1b2-a2b1       for the x
        //c1a2-c2a1/a1b2-a2b1       for the y   
        //y=mx+b  =>   -mx + y - b = 0     => m=yMag/xMag
        //-yMag*x + xMag*y - b*xMag = 0;
        //c = (-yMag*x + xMag*y) * xMag
        //a1 = (hitbox dependent)
        //a2 = -yMag
        //b1 = (hitbox dependent)
        //b2 = xMag
        //c1 = (hitbox dependent)
        //c2 = (-yMag*x + xMag*y) * xMag

        
        var leftCollision = null;
        var rightCollision = null;
        var topCollision = null;
        var bottomCollision = null;
        var leftDistance = 0;
        var rightDistance = 0;
        var topDistance = 0;
        var bottomDistance = 0;
        var c2 = (-this.yMag*this.x + this.xMag*this.y);

        if(this.xMag != 0)                                      //We only need the y value of the intercept
        {
            //Left: c1 is hitbox.left, b1 is 0, a1 is 1
            leftCollision = -(((hitbox.left*(-this.yMag))-c2)/this.xMag);
            leftDistance = Math.sqrt(Math.pow(hitbox.left-this.x,2) + Math.pow(leftCollision-this.y,2));
            //Right: c1 is hitbox.right, b1 is 0, a1 is 1
            rightCollision = -(((hitbox.right*(-this.yMag))-c2)/this.xMag);
            rightDistance = Math.sqrt(Math.pow(this.x-hitbox.right,2) + Math.pow(this.y-rightCollision,2));
        }
        
        if(this.yMag != 0)                                      //We only need the x value of the intercept
        {
            //Top: c1 is hitbox.top, a1 is 0, b1 is 1
            topCollision = -(c2-this.xMag*hitbox.bottom)/this.yMag;
            topDistance = Math.sqrt(Math.pow(topCollision-this.x,2) + Math.pow(hitbox.bottom-this.y,2));
            //Bottom: c1 is hitbox.bottom, a1 is 0, b1 is 1
            bottomCollision = -(c2-this.xMag*hitbox.top)/this.yMag;                                //c2-b2c1/-a2
            bottomDistance = Math.sqrt(Math.pow(bottomCollision-this.x,2) + Math.pow(hitbox.top-this.y,2));
        }
        if(bottomCollision < hitbox.left || bottomCollision > hitbox.right) {bottomCollision = null; bottomDistance = 0;}
        if(topCollision < hitbox.left || topCollision > hitbox.right) {topCollision = null; topDistance = 0;}
        if(leftCollision > hitbox.bottom || leftCollision < hitbox.top) {leftCollision = null; leftDistance = 0;}
        if(rightCollision > hitbox.bottom || rightCollision < hitbox.top) {rightCollision = null; rightDistance = 0;}

        var col = new Collision([leftCollision, rightCollision, topCollision, bottomCollision], [leftDistance, rightDistance, topDistance, bottomDistance]);
        if(!col.bottomDistance && !col.topDistance && !col.leftDistance && !col.rightDistance) {return null}
        return col;
    }
}