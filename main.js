// Track currently selected object
let selected = null;

// select() sets the currently selected object and related information
function select(selection, selectionName) {
    // Update currently selected object
    selected = selection;

    // Update selection text
    d3.select("#selection")
        .text("Selected: " + selectionName);

    // Update slider to reflect opacity of selected object
    document.getElementById("opacitySlider").value = selected.style.opacity === "" ? "1.0" : selected.style.opacity;

    // Update color to reflect color of selected object
    if (selection.nodeName === "line") {
        document.getElementById("color").value = rgbToHex(selection.style.stroke);
    } else {
        document.getElementById("color").value = rgbToHex(selection.style.fill);
    }
}

// setupInputCallbacks() sets up the callbacks on the slider & color input
function setupInputCallbacks() {
    // Set up slider to update opacity of selected object
    d3.select("#opacitySlider")
        .on("input", function(e) {
            if (selected) {
                d3.select(selected).transition()
                    .duration("10")
                    .style("opacity", e.target.value);
            }
        });

    // Set up color input to update color of selected object
    d3.select("#color")
        .on("input", function(e) {
            if (selected) {
                if (selected.nodeName === "line") {
                    d3.select(selected)
                        .style("stroke", e.target.value);
                } else {
                    d3.select(selected)
                        .style("fill", e.target.value);
                }
            }
        });
}

// rgbToHex() converts from the form "rgb(int, int, int)" to hexadecimal color
function rgbToHex(input) {
    // Strip of leading "rgb(" and ending ")"
    input = input.substr(4, input.length - 5);

    // Split string based on spaces
    let rgb = input.split(" ");
    rgb[0].substr(0, rgb[0].length - 1);
    rgb[1].substr(0, rgb[1].length - 1);

    // Convert values to hex (and add appropriate padding
    rgb[0] = parseInt(rgb[0]).toString(16);
    if (rgb[0].length === 1) {
        rgb[0] = "0" + rgb[0];
    }

    rgb[1] = parseInt(rgb[1]).toString(16);
    if (rgb[1].length === 1) {
        rgb[1] = "0" + rgb[1];
    }

    rgb[2] = parseInt(rgb[2]).toString(16);
    if (rgb[2].length === 1) {
        rgb[2] = "0" + rgb[2];
    }

    // Concatenate and return hex color
    return "#" + rgb[0] + rgb[1] + rgb[2];
}

// createShapes() draws the basic shapes onto the svg
function createShapes(svg) {
    // Draw a line
    svg.append("line")
        .style("stroke", "#FF0000")
        .style("stroke-width", 2)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 100)
        .attr("y2", 100)
        .on('click', function(e) {
            select(this, "Line");
        });

    // Draw a rectangle
    svg.append("rect")
        .style("fill", "#00FF00")
        .attr("x", 150)
        .attr("y", 150)
        .attr("width", 50)
        .attr("height", 80)
        .on('click', function(e) {
            select(this, "Rectangle");
        });

    // Draw a circle
    svg.append("circle")
        .style("fill", "#0000FF")
        .attr("cy", 300)
        .attr("cx", 300)
        .attr("r", 50)
        .on('click', function(e) {
            select(this, "Circle");
        });

    // Draw a polygon
    svg.append("polygon")
        .style("fill", "#FF00FF")
        .attr("points", "300,50 350,50 385,100 350,150 300,150 265,100 300,50")
        .on('click', function(e) {
            select(this, "Polygon");
        });
}

// main() handles setup of the program
function main() {
    // Test if d3 is loaded
    console.log(d3);

    // Setup input callbacks
    setupInputCallbacks();

    // Setup svg
    let svg = d3.select("#target")
        .attr("width", 400)
        .attr("height", 400)
        .attr("background-color", "white");

    // Create shapes on the svg
    createShapes(svg);
}