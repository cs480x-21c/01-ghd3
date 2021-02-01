class RandomShapeMaker
{
    constructor()
    {
        //???

        // Observers
        this.observerList = [];
    }

    test()
    {
        this.notifyAll(10);
    }


    // Observer methods

    addObserver(observer)
    {
        this.observerList.push(observer);
    }

    removeObserver(observer)
    {
        this.observerList.splice(this.observerList.indexOf(observer, 1));
    }

    notifyAll(increase)
    {
        // notify all observers
        this.observerList.forEach(function(o, i)
        {
            o.notify(increase);
        })
    }
}