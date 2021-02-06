/**
 * StartGame.js
 * date created: 1/28/2021
 * Author: Benjamin M'Sadoques
 *
 * Provides functions to start stop and reset the game
 * Requires HTML buttons for start() and stop()
 */

let gGameIsRunning = false;

/**
 * Starts the shape game or resets if the game is already running
 * @param startGameButton the html start game button
 */
function startGame(startGameButton)
{
    // If the game is running reset it
    if (gGameIsRunning)
    {
        resetGame();
    }
    else
    {
        gGameIsRunning = true;

        // Change the start button to a re-start button
        startGameButton.value = "restart";

        // Enable the stop button
        document.getElementById("stopGameButton").disabled = false;
    }

    // data constants
    const width = 1000;
    const height = 750;

    // Add an SVG (sets up globals for creating shapes)
    let svg = makeSVG2D("#vis", width, height);

    // Get the number of shapes the user input
    let shapes = parseInt(document.getElementById("shapesToMake").value, "10");

    // Create (and start) the game
    let maker = new RandomShapeMaker(svg, width, height, shapes);
    maker.makeShapes();

    // start timer
    startTimer('#timerDisplay');

    // Check shapes (in case the user put 0 shapes)
    checkShapesLeft();
}

/**
 * Stops the game
 * @param stopGameButton the html stop game button
 */
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

/**
 * Resets the game
 */
function resetGame()
{
    removeAllShapes();
    stopTimer('#timerDisplay');
    displayTime('#timerDisplay', 0); // do not display final time
}
