class ScoreObserver
{
    constructor(idString)
    {
        this.idString = idString;
        this.score = 0;

        // Initial notify so the score is displayed
        this.notify(0);
    }

    notify(increase)
    {
        this.score += increase;
        d3.select(this.idString).text("score: " + this.score);
    }
    //
}