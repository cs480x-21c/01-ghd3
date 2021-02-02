
/**
 * Removes
 * @param typeString the type of shape
 * @param id the id of the shape to remove (must be non-numeric)
 */
function removeShape(typeString, id)
{
    d3.select(gSvgID).select(typeString + '#' + id).remove();
}