/*
    Handle Gamewindow things
        -Add and size the gameWindow
        -Set up the pause/resume buttons
*/

const removes = ["bg"];     //List of classes of elements to remove when the game closes.

var ticking;
var gameWindowID = "#gameWindow";


function sizeWindow(gameWindow)     //Resizes the game window to fit the screen
{
    var gwWidth = 200;
    var gwHeight = 200;
    $("main").style.height = (parseInt($("body").offsetHeight) - parseInt($("header").offsetHeight)) + "px";

    //Scales to either width or height
    if(parseInt($("main").offsetHeight) > parseInt($("main").offsetWidth))
    {
        gwWidth = parseInt($("main").offsetWidth) + "px";
        gwHeigh = gwWidth;
    }
    else {
        gwHeight = parseInt($("main").offsetHeight) + "px";
        gwWidth = gwHeight;
    }
    gameWindow.style.height = gwHeight;
    gameWindow.style.width = gwWidth;
}


function addGameWindow()        //Creates the game window
{
    var gameWindow = $(gameWindowID);
    if(gameWindow){
        gameWindow.id = "Hanabushii";   //Takes over the gameWindow if availible
        gameWindowID = "#Hanabushii";
        $("#gameTitle").textContent = "Hanabushii";
        $("title").textContent = "Hanabushii";
        sizeWindow(gameWindow);
    }
}

//Sets up the functions for the pause button.
var pause = () => {
    clearInterval(ticking);
    $("#pause").removeEventListener("click", pause);
    $("#pause").addEventListener("click", resume);
};

var resume = () => {
    ticking = setInterval(tick, 10);
    $("#pause").removeEventListener("click", resume);
    $("#pause").addEventListener("click", pause);
};
