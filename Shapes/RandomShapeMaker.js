

class RandomShapeMaker
{
    // constants
    NUMBER_OF_SHAPES = 4;
    LINE = 0;
    RECTANGLE = 1;
    CIRCLE = 2;
    POLYGON = 3;
    COLORS = [];

    constructor(svg, width, height, startShapes, shapeIncreasePerLevel)
    {
        // Colors to choose from
        this.COLORS.push("rgb(255, 200, 200)", "rgb(200, 255, 200)", "rgb(200, 200, 250)",
            "rgb(200, 255, 255)");

        // svg to draw on
        this.svg = svg;

        // Bounds to place shapes
        // gWidth = width;
        // gHeight = height;
        this.width = width;
        this.height = height;

        // Shapes to make
        this.shapes = startShapes;
        this.shapeIncreasePerLevel = startShapes;
        this.shapesLeft = this.shapes;

        // Makes the shapes for the first round
        this.makeShapes();

        // Score start
        announceScore(0);
    }

    makeShapes()
    {
        // Makes a random shape, selects the type first
        for (let i = 0; i < this.shapes; i++)
        {
            let shape = d3.randomInt(0, this.NUMBER_OF_SHAPES)();
            switch (shape)
            {
                case this.LINE:
                    this.makeRandomLine(i);
                    break;
                case this.RECTANGLE:
                    this.makeRandomRectangle(i);
                    break;
                case this.CIRCLE:
                    this.makeRandomCircle(i);
                    break;
                case this.POLYGON:
                    this.makeRandomPolygon(i);
                    break;
                default:
                    break;
            }

            // for testing individual shape types
            //this.makeRandomLine(i);
            //this.makeRandomRectangle();
            //this.makeRandomCircle();
            //this.makeRandomPolygon();
        }
    }

    makeRandomLine(id)
    {
        // Lines can be really long
        this.svg.append('line')
            .style("stroke", this.randomColor())
            .style("stroke-width", d3.randomInt(2, 10))
            .attr("x1", d3.randomInt(0, this.width)())
            .attr("y1", d3.randomInt(0, this.height)())
            .attr("x2", d3.randomInt(0, this.width)())
            .attr("y2", d3.randomInt(0, this.height)())
            .attr("id", "L" + id)
            .on("mousedown", function (e, d)
            {
                removeShape('line', this.id);
                announceScore(1);
            });
    }

    makeRandomRectangle(id)
    {
        // Rectangles can be really big
        // Rectangles can cover each-other
        this.svg.append('rect')
            .style("stroke", "black")
            .style("stroke-width", d3.randomInt(2, 10))
            .style("fill", this.randomColor())
            .attr("width", d3.randomInt(0, this.width)())
            .attr("height", d3.randomInt(0, this.height)())
            .attr("id", "R" + id)
            .on("mousedown", function (e, d)
            {
                removeShape('rect', this.id);
                announceScore(2);
            });
    }

    makeRandomCircle(id)
    {
        // Circles can cover each-other, but it's not that bad
        this.svg.append('circle')
            .style("stroke", "black")
            .style("stroke-width", d3.randomInt(2, 10))
            .style("fill", this.randomColor())
            .attr("cx", d3.randomInt(0, this.width)())
            .attr("cy", d3.randomInt(0, this.height)())
            .attr("r", d3.randomInt(10, 100))
            .attr("id", "C" + id)
            .on("mousedown", function (e, d)
            {
                removeShape('circle', this.id);
                announceScore(3);
            });
    }

    makeRandomPolygon(id)
    {
        // polygons can be really big
        this.svg.append('polygon')
            .style("stroke", "black")
            .style("stroke-width", d3.randomInt(2, 10))
            .style("fill", this.randomColor())
            .attr("points", function ()
            {
                // defines the number of sides before creating the polygon
                let sides = d3.randomInt(3, 9)();
                let points = "";
                for (let p = 0; p < sides; p++)
                {
                    points += points + [d3.randomInt(0, width)(), d3.randomInt(0, height)()].join(",") + " ";
                }
                return points;
            })
            .attr("id", "R" + id)
            .on("mousedown", function (e, d)
            {
                removeShape('polygon', this.id);
                announceScore(4);
            });
    }

    /**
     * Gets a random color from a list of colors
     * @returns a random rgb color from the internal list
     */
    randomColor()
    {
        return this.COLORS[d3.randomInt(0, this.COLORS.length)()];
    }
}



