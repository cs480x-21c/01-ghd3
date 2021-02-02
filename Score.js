// Global score, needs to be accessed by all shapes
let gScoreID = "";
let gScore = 0;

function announceScore(increase)
{
    gScore += increase;
    d3.select(gScoreID).text("score: " + gScore);
}
