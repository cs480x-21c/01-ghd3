/**
 * StartGame.js
 * date created: 1/05/2021
 * Author: Benjamin M'Sadoques
 *
 * Provides functions to control a d3 timer displayed on the screen
 */

/**
 * The d3 timer
 */
let gTimer;

/**
 * The HTML div to display the timer on
 */
let gTimerDisplay;

/**
 * Starts the timer on the timer display
 * @param timerDisplay id string for an HTML div
 */
function startTimer(timerDisplay)
{
    gTimerDisplay = timerDisplay;

    gTimer = d3.timer( function(elapsed)
    {
        displayTime(gTimerDisplay, elapsed);
    }, 0);
}

/**
 * Stops the timer on the timer display
 * @param timerDisplay id string for an HTML div
 */
function stopTimer(timerDisplay)
{
    gTimerDisplay = timerDisplay;
    gTimer.stop();
}

/**
 * displays the elapsed time
 * @param timerDisplay id string for an HTML div
 * @param elapsed time in ms
 */
function displayTime(timerDisplay, elapsed)
{
    gTimerDisplay = timerDisplay;

    // Formats the elapsed time to display minutes : seconds : milliseconds
    let timeFormat = d3.timeFormat("%M:%S:%L");
    // Dates handle overflow so no manual conversion is needed
    let currentTime = new Date(1, 1, 1, 0, 0, 0, elapsed);
    let displayTime = timeFormat(currentTime);

    // Maximum time reached, to prevent overflow cheating
    if (currentTime.getMinutes() === 30)
    {
        gTimer.stop();
    }

    d3.select(timerDisplay).text(displayTime);
}
