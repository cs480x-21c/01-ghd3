/**
 * svg.js
 * date created: 1/29/2021
 * Author: Benjamin M'Sadoques
 *
 * Provides functions for making an SVG and scales
 */

/**
 *
 * @param width
 * @param height
 * @returns {*}
 */
function makeSVG2D(width, height)
{
    return d3.select('#vis')
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

