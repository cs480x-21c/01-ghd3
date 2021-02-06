/**
 * svgControl.js
 * date created: 1/29/2021
 * Author: Benjamin M'Sadoques
 *
 * Provides functions for making an SVG and global variables used for SVG-related functions
 * Must call make2DSVG() before anything else is called to set globals.
 */

/**
 * The global ID string used to refer to the svg
 * Multiple functions depend on this being set
 * @type {string}
 */
let gSVGId = "";
let gSVGWidth = 0;
let gSVGHeight = 0;
let gShapesLeft = 0;

/**
 *
 * @param visId
 * @param width
 * @param height
 * @returns {*}
 */
function makeSVG2D(visId, width, height)
{
    gSVGId = visId;
    gSVGWidth = width;
    gSVGHeight = height;

    let svg = d3.select(gSVGId)
        .attr("width", gSVGWidth)
        .attr("height", gSVGHeight);

    addBorder();

    return svg;
}

/**
 * Removes a type of shape with an ID
 * @param typeString the type of shape
 * @param id the id of the shape to remove (must be non-numeric)
 */
function removeShape(typeString, id)
{
    gShapesLeft--;

    d3.select(gSVGId).select(typeString + '#' + id).remove();

    checkShapesLeft();
}

/**
 * /**
 * Checks how many shapes are left (global)
 * If no shapes are left the timer is stopped
 */
function checkShapesLeft()
{
    // check if all shapes have been removed
    if (gShapesLeft === 0)
    {
        stopTimer();
    }
}

/**
 * Removed all the shapes from the svg
 * Re-adds the border
 */
function removeAllShapes()
{
    gShapesLeft = 0;

    d3.select(gSVGId).selectAll("svg > *").remove();

    // re-add border, it was removed earlier
    addBorder();
}

/**
 * Adds a shape (increments the global shapes left counter)
 */
function addShape()
{
    gShapesLeft++;
}

/**
 * adds a border around the svg (a rectangle)
 */
function addBorder()
{
    // Add a border to the SVG
    d3.select(gSVGId).append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", gSVGWidth)
        .attr("height", gSVGHeight)
        .style("stroke", "black")
        .style("fill", "none")
        .style("stroke-width", "1.0%");
}
