/**
 * svg.js
 * date created: 1/29/2021
 * Author: Benjamin M'Sadoques
 *
 * Provides functions for making an SVG and scales
 * And removing shapes from an svg
 */

/**
 * The global ID string used to refer to the svg
 * Multiple functions depend on this being set
 * @type {string}
 */
let gSvgID = "";

/**
 *
 * @param width
 * @param height
 * @returns {*}
 */
function makeSVG2D(width, height)
{
    return d3.select(gSvgID)
        .attr('width', width)
        .attr('height', height);
}

/**
 *
 * @param rangeMin
 * @param rangeMax
 * @param data
 * @returns {*}
 */
function makeScale(rangeMin, rangeMax, data)
{
    return d3.scaleLinear()
        .domain([d3.min(data), d3.max(data)])
        .range([rangeMin, rangeMax]);
}

/**
 * Removes
 * @param typeString the type of shape
 * @param id the id of the shape to remove (must be non-numeric)
 */
function removeShape(typeString, id)
{
    d3.select(gSvgID).select(typeString + '#' + id).remove();
}
