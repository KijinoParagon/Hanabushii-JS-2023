/*
    This will create controls for the player.
*/
"use strict";

function addControls()
{
    var gameWindow = $(gameWindowID);
    console.log("controls added");
    addEventListener("keydown", evt => {
        if(evt.key == "w")
        {
            if(!player.state.includes("jump"))
                jump();
        }
            
    });
    addEventListener("keyup", evt => {
        if(evt.key == "w")
            endJump();
    });

}

function jump()
{
    player.state.push("jump");
    player.jumptime = player.jumpheight;
    player.yMomentum = -player.jumpheight;
}

function endJump()
{
    player.state.splice(player.state.indexOf("jump"), 1);
}