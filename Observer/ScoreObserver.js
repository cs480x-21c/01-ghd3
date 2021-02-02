class ScoreObserver
{
    /**
     *
     * @param idString
     */
    constructor(idString)
    {
        this.idString = idString;
        this.score = 0;

        // Initial notify so the score is displayed
        this.notify(0);
    }

    /**
     *
     * @param score increase (optional)
     */
    notify()
    {
        this.score += arguments[0];
        d3.select(this.idString).text("score: " + this.score);
    }
}