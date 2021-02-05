let gTimer;
let gTimerDisplay;

/**
 *
 * @param timerDisplay
 */
function startTimer(timerDisplay)
{
    gTimerDisplay = timerDisplay;

    gTimer = d3.timer(function(elapsed)
    {
        displayTime(elapsed);
    }, 0);
}

/**
 *
 * @param timerDisplay
 */
function stopTimer(timerDisplay)
{
    gTimerDisplay = timerDisplay;
    gTimer.stop();
}

/**
 *
 * @param elapsed
 */
function displayTime(elapsed)
{
    // Formats the elapsed time to display minutes : seconds : milliseconds
    let timeFormat = d3.timeFormat("%M:%S:%L");
    let currentTime = new Date(1, 1, 1, 0, 0, 0, elapsed);
    let time = timeFormat(currentTime);

    // Maximum time reached, to prevent cheating
    if (currentTime.getMinutes() === 30)
    {
        gTimer.stop();
    }

    d3.select(timerDisplay).text(time);
}

