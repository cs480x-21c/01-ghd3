function main() {
    // Test if d3 is loaded
    console.log(d3);

    // Setup svg
    let svg = d3.select("#target")
        .attr("width", 400)
        .attr("height", 400)
        .attr("background-color", "white");

    // Draw a line
    svg.append("line")
        .style("stroke", "red")
        .style("stroke-width", 2)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 100)
        .attr("y2", 100);

    // Draw a rectangle
    svg.append("rect")
        .style("fill", "green")
        .attr("x", 150)
        .attr("y", 150)
        .attr("width", 50)
        .attr("height", 80);

    // Draw a circle
    svg.append("circle")
        .style("fill", "blue")
        .attr("cy", 300)
        .attr("cx", 300)
        .attr("r", 50);

    // Draw a polygon
    svg.append("polygon")
        .style("fill", "purple")
        .attr("points", "300,50 350,50 385,100 350,150 300,150 265,100 300,50");
}