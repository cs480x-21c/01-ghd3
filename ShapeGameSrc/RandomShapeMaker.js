/**
 * RandomShapeMaker.js
 * date created: 1/29/2021
 * Author: Benjamin M'Sadoques
 *
 * Provides the class that draws random shapes on the svg
 * It can draw lines, rectangles, circles, and polygons
 */

/**
 * Draws random shapes when make shapes is called
 */
class RandomShapeMaker
{
    // constants
    NUMBER_OF_SHAPES = 4;
    LINE = 0;
    RECTANGLE = 1;
    CIRCLE = 2;
    POLYGON = 3;
    COLORS = [];

    constructor(svg, width, height, shapesToMake)
    {
        // Colors to choose from
        this.COLORS.push("rgb(255, 200, 200)", "rgb(200, 255, 200)", "rgb(200, 200, 250)",
            "rgb(200, 255, 255)");

        this.svg = svg;
        this.width = width;
        this.height = height;
        this.shapesToMake = shapesToMake;
    }

    /**
     * makes the amount of shapes that was set in the constructor
     */
    makeShapes()
    {
        // Makes a random shape, selects the type first, then passes it to a shape generator
        for (let i = 0; i < this.shapesToMake; i++)
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
        }
    }

    /**
     * Gets a random color from a list of colors
     * @returns a random rgb color from the internal list
     */
    randomColor()
    {
        return this.COLORS[d3.randomInt(0, this.COLORS.length)()];
    }

    /**
     * Creates a random line within the svg
     * @param id the shape's id used when removed (must not conflict with other shape IDs)
     */
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
            });
    }

    /**
     * Creates a random rectangle within the svg
     * @param id the shape's id used when removed (must not conflict with other shape IDs)
     */
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
            });
    }

    /**
     * Creates a random circle within the svg
     * @param id the shape's id used when removed (must not conflict with other shape IDs)
     */
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
            });
    }

    /**
     * Creates a random line within the svg
     * @param id the shape's id used when removed (must not conflict with other shape IDs)
     */
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
                    points += points + [d3.randomInt(0, gSVGWidth)(), d3.randomInt(0, gSVGHeight)()].join(",") + " ";
                }
                return points;
            })
            .attr("id", "R" + id)
            .on("mousedown", function (e, d)
            {
                removeShape('polygon', this.id);
            });
    }
}



