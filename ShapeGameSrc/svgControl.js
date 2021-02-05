/**
 * svgControl.js
 * date created: 1/29/2021
 * Author: Benjamin M'Sadoques
 *
 * Provides functions for making an SVG and global variables used for SVG-related functions
 */

/**
 * The global ID string used to refer to the svg
 * Multiple functions depend on this being set
 * @type {string}
 */
let gSVGId = "";
let gSVGWidth = 0;
let gSVGHeight = 0;

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

    return d3.select(gSVGId)
        .attr('width', gSVGWidth)
        .attr('height', gSVGHeight);
}

/**
 * Removes a type of shape with an ID
 * @param typeString the type of shape
 * @param id the id of the shape to remove (must be non-numeric)
 */
function removeShape(typeString, id)
{
    d3.select(gSVGId).select(typeString + '#' + id).remove();
}

/**
 * Removed all the shapes from the svg
 */
function removeAllShapes()
{
    d3.select(gSVGId).selectAll("svg > *").remove();
}
