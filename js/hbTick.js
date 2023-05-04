var counter = 0;
var gameWindow = $(gameWindowID);


function tick()
{
    gameWindow = $(gameWindowID);
    //bgMove returns which background was culled, so we can use this to tick the counter and alternate the background
    floor = {
        xMomentum: 0,
        yMomentum: 0,
        //create height, width, and offset
        width: parseInt(gameWindow.offsetWidth),
        height: parseInt(gameWindow.offsetHeight) * 40 / 480,
        x: 0,
        y: parseInt(gameWindow.offsetHeight) * 440 / 480
    }
    playerTick(); //needs two objects
    //playerTick([0, 0, 0, 0]);
    //playerXMomentum ++;
    //playerYMomentum ++;

    /*if(bgMove(10 ,counter%2))
    {
        counter++;
    }*/
    ///console.log(playerXMomentum, playerYMomentum);
}