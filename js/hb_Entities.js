/*
    Entity classes define physical objects in the game
*/

class Entity {              //The most generic superclass of entity
    constructor(){
        this.type = null;
        this.state = [];
        this.xMomentum = 0;
        this.yMomentum = 0;
        this.height = null;
        this.width = null;
        this.x = null;
        this.y = null;
        this.hitbox = new Hitbox();
        this.sprite = new Image();
    }

    set x(val){
        this.x = this.val;
        this.hitbox.left = this.x;
        this.hitbox.right = this.x + this.width;
    }

    set y(val){
        this.y = this.val;
        this.hitbox.top = this.y;
        this.hitbox.bottom = y + this.height;
    }

    tick(entities){

        //UpLeft, UpRight, BotLeft, BotRight
        var corners = [     new Vector(this.x, this.y, this.xMomentum, this.yMomentum),
                            new Vector(this.x + this.width, this.y, this.xMomentum, this.yMomentum),
                            new Vector(this.x, this.y + this.height, this.xMomentum, this.yMomentum),
                            new Vector(this.x + this.width, this.y + this.height, this.xMomentum, this.yMomentum)];

        //Move the hitbox before the player. When we move the player, we'll move the hitbox to them.
        for(e of entities){
            for(corner of corners)
                {
                    corner.getIntersection(e.hitbox);
                }
        }
    }
}