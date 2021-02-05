/**
 * Starts the shape game
 */
function startGame()
{
    //console.log(d3); // test if d3 is loaded

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
}