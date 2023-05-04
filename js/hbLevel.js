/*
    This is the meat of the level. This will have functions for affecting the background.
*/

"use strict";
const bgDirectory = "res/";
const bgImages = ["Background 2.png", "Background 3.png"];

let backgrounds = [];

var level = 1;

//Loads the background by putting a bg at the center, then left, then right
//Also places them in the correct position in the array.
function loadBg(levelNum)
{
    level = levelNum;
    backgrounds = [];
    backgrounds.push(addBG(level, "center"));
    backgrounds.unshift(addBG(level, "left"));
    backgrounds.push(addBG(level, "right"));
}

//Adds a new background to our bgs. 
//We'll give it an index for the image source, and whether we want it on the left end, right end, or center.
//Also returns the background we created, for us to put it into the array.
function addBG(bgImageNum, position)
{
    var gameWindow = $(gameWindowID);
    var bg = new Image();
    bg.src = bgDirectory + bgImages[bgImageNum];
    bg.classList.add("bg");

    bg.height = parseInt(gameWindow.offsetHeight);
    gameWindow.appendChild(bg);
    if (position == "right"){
        var rightEnd = backgrounds.pop();
        bg.style.left = (parseInt(rightEnd.style.left) + rightEnd.width +1) + "px";
        backgrounds.push(rightEnd);
    }
    else if (position == "left")
    {
        var leftEnd = backgrounds.shift();
        bg.style.left = (parseInt(leftEnd.style.left) - bg.width + 1) + "px";
        backgrounds.unshift(leftEnd);
    }
    else if(position == "center")
    {
        bg.style.left = "0px";
    }
    bg.classList.add(position);
    return bg;
}

//Moves the backgrounds by a specified distance along the Y axis.
//Requires the index of the next background image if one should be culled.
//Returns right or left if either the right or left bg is culled, none otherwise.
function bgMove(distance, nextLevelNum)
{
    var culled = "none";
    var gameWindow = $(gameWindowID);

    //Moves each background
    for(var bg of backgrounds)
    {
        var yPosition = parseInt(bg.style.left);
        yPosition += distance;
        bg.style.left = yPosition + "px";
    }

    //Cull the backgrounds if necessary, then add a new one
    if(parseInt(backgrounds[0].style.left) < (-bg.width) - 1)  
    {
        var rightEnd = backgrounds[backgrounds.length - 1];
        var bg = backgrounds.shift();
        bg.remove();
        backgrounds.push(addBG(nextLevelNum, "right"));
        culled = "left";
    }  
    else if (parseInt(backgrounds[backgrounds.length - 1].style.left) > (bg.width) + 1)
    {
        var leftEnd = backgrounds[0];
        var bg = backgrounds.pop();
        bg.remove()
        backgrounds.unshift(addBG(nextLevelNum, "left"));
        culled = "right";
    }

    return culled;
}