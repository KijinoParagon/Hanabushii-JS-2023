/*
    This will create settings for the player.
*/
"use strict";


//The player object will hold their data
var player = {
    type: "player",
    state: [],
    jumptime: 0,
    jumpheight: 10,
    sprite: new Image(),
    xMomentum: 0,
    yMomentum: 0,
    //create height, width, and offset
    height: 10,
    width: 10,
    x: 0,
    y: 0,
    xPrev: 0,
    yPrev: 0
}

const spriteDirectory = "res/";
const spriteImages = ["Alex Run_1.png", "Alex Run_2.png", "Alex Run_3.png"];


//Load the player image and place them dynamically at the bottom.
function loadPlayer()
{
    player.sprite.src = spriteDirectory + spriteImages[0];
    var gameWindow = $(gameWindowID);
    gameWindow.appendChild(player.sprite);
    player.sprite.classList.add("player");
    player.x = (parseInt(gameWindow.offsetWidth) / 2 - (parseInt(player.sprite.offsetWidth)/2));
    player.y = (parseInt(gameWindow.offsetHeight) * 440 / 480 - parseInt(player.sprite.offsetHeight) -90);
    player.sprite.style.top = player.y + "px";
    player.sprite.style.left = player.x + "px";
}

function playerTick()
{
    var collides = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };

    var collisions = [];

    var playerVector = [player.xPrev, player.yPrev, player.x, player.y];

    //Check against all dynamics
    for(var obj of dynamics){
        if(obj.type != "player"){                           //Don't check against self
            var tempCollides = collision(player, obj, playerVector);
            var objCollision = false;
            
            for(var i in tempCollides)
            {
                collides[i] += tempCollides[i];
                if(tempCollides[i])
                    objCollision = true;
                collisions.push([obj, tempCollides]);
            }
            if (objCollision)
                console.log("We have colisson", tempCollides);
            //console.log(obj, collides, tempCollides);
        }  
    }


    //console.log(player.jumpheight, player.jumptime, player.yMomentum);
    if(player.jumptime)
        player.jumptime--;


    var collideL = collides[0];
    var collideR = collides[1];
    var collideT = collides[2];
    var collideB = collides[3];

    player.xPrev = player.x;
    player.yPrev = player.y;

    if(!collideL && !collideR)
        player.x += player.xMomentum;
    else
        player.xMomentum = 0;
    if((!collideT && !collideB) || player.state.includes("jump"))
        player.y += player.yMomentum;
    else
        player.yMomentum = 0;

    player.sprite.style.left = player.x + "px";
    player.sprite.style.top = player.y + "px";
    gravity(player);
    
}

