/*
    This file will start up the Hanabushii game.
    We'll create a button to set up the game, and when it is clicked, we will start the game, and import the libraries
*/
const head = $("head");
var dynamics = [];

document.addEventListener("DOMContentLoaded", () => {
    
    //For the game toggle button
    $("#gameToggle").addEventListener("click", () => {
        var startup = head.querySelector("#startupScript");

        /*
            TURN THE GAME ON
        */
        if(!startup.classList.contains("gameOn")) {
            addGameWindow();
            loadBg(1);
            loadPlayer();
            ticking = setInterval(tick, 10);    //Start running the game
        }

        /*
            TURN THE GAME OFF
        */
        else {

            removeGameWindow();
        }

        //Toggles the class gameOn to determine if we should add or remove the gamewindow.
        startup.classList.toggle("gameOn");
    });

    addGameWindow();
    loadBg(1);
    loadPlayer();
    var gameWindow = $(gameWindowID);
    var floor = {
        type: "level",
        xMomentum: 0,
        yMomentum: 0,
        width: parseInt(gameWindow.offsetWidth) * 2,
        height: 40,
        x: 0,
        y: (parseInt(gameWindow.offsetHeight) * 440 / 480) - 40
    }
    console.log(floor.width);
    dynamics.push(player);
    dynamics.push(floor);

    addControls();
    ticking = setInterval(tick, 10);    //Start running the game
    $("#pause").addEventListener("click", pause)
});