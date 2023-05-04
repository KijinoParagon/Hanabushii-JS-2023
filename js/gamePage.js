/*
    Set up js for handling things on the page that aren't the game
    These currently include:
        -A Visual Debug button
*/
const $ = (selector) => document.querySelector(selector);

//Assign event listeners
document.addEventListener("DOMContentLoaded", () => {
    $("#pageDebug").addEventListener("click", () => {                       //Set up the page debug button to change the classes
        $("html").classList.toggle("visualDebug");                          //for css purposes
    });

    let vec = new Vector(0, -5, 100, 100);
    let box1 = new Hitbox(0, 0, 10, 10);
    vec.getIntersection(box1);
    
    addGameWindow();
    //addBG(1, "center");
});



