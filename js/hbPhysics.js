/*
    This will create settings for the player.
*/
"use strict";

class Collision {
    constructor(direction, distance)
    {
        this.direction = direction;
        this.distance = distance;
    }
}

//Check two objects for collision, and return the point of collision
//objects should have x and y values, heights, and widths
//Vector should be in the format [previousX, previousY, currentX, currentY]
function collision(obj1, obj2, vector)
{
    var collides = {
        top: new Collision(),
        bottom: new Collision(),
        left: new Collision(),
        right: new Collision()
    };


    var obj2HB = {
        top: obj2.y,
        bottom: obj2.y + obj2.height,
        left: obj2.x,
        right: obj2.x + obj2.width
    }

    if(vector[0] + obj1.width < obj2HB.left && vector[2] + obj1.width > obj2HBox.left)
    {
        //collided left
        collides.left.x = - vector[2] + obj1.width - obj2HB.left;
    }
    if(vector[0] > obj2HitBox.right && vector[2] < obj2HitBox.right)
    {
        //collided right
        collides.right.x = obj2HB.right - vector[2];
    }
    if(vector[1] + obj1.height < obj2HitBox.top && vector[3] + obj1.height > obj2HitBox.top)
    {
        //collided top
        collides.top.y = obj1.height;
    }
    if(vector[1] > obj2HitBox.bottom && vector[3] < obj2HitBox.bottom)
    {
        //collided bottom
    }
    

    

    console.log(collides);
    //if( obj1.x < obj2.x+obj2.width && obj1.x+obj1.width > obj2.x)
    //    console.log("x inbetween working");
    //console.log("Object 1 LRTB: ", x1L, x1R, x1T, x1B)
    //console.log("Object 2 LRTB: ", x2L, x2R, x2T, x2B);


    
    

    return collides;
}

function gravity(object)
{
    object.yMomentum++;
}

