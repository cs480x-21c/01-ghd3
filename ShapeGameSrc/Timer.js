

let gTimer;

function startTimer(timerDisplay)
{
    gTimer = d3.timer(function(elapsed)
    {
        console.log(elapsed);
    }, 0);
}

