let gGameIsRunning = false;

/**
 * Starts the shape game, checks if the game is already running
 */
function startGame(startGameButton)
{
    // If the game is running, the game can be restarted if all shapes are removed
    if (gGameIsRunning)
    {
        resetGame();
    }

    gGameIsRunning = true;

    console.log(d3); // test if d3 is loaded

    // Change the start button to a re-start button
    startGameButton.value = "restart";

    // Enable stop button
    document.getElementById("stopGameButton").disabled = false;

    // data constants
    const width = 1000;
    const height = 750;

    // Add an SVG (sets up globals for creating shapes)
    let svg = makeSVG2D("#vis", width, height);

    // Get the number of shapes the user input
    let shapes = parseInt(document.getElementById("shapesToMake").value, "10");

    // Checks if the input is valid
    if (isNaN(shapes))
    {
        // TODO: notify the user somehow
        console.log("SUCC");
    }

    // Create (and start) the game
    let maker = new RandomShapeMaker(svg, width, height, shapes);
    maker.makeShapes();

    // start timer
    startTimer('#timerDisplay');
}

function stopGame(stopGameButton)
{
    resetGame();

    // Game is no-longer running once stopped
    gGameIsRunning = false;

    // Disable the stop button
    stopGameButton.disabled = true;

    // Change the re-start button back to a start button
    document.getElementById("startGameButton").value = "start";
}

function resetGame()
{
    removeAllShapes();

    // TODO: stop timer
    stopTimer('#timerDisplay');
}