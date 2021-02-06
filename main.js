/* Static canvas color wheel from Cory Forsyth
 * https://codepen.io/bantic/pen/vgyBWx
 *
 * Modifications: hsl instead of hsv, using d3 to convert hsl to rgb, gradient lightness radially instead of saturation
 */

let colorWheelInteractive = document.getElementById('colorWheelInteractive');
let saturationSlider = document.getElementById('saturationSlider');
let saturationText = document.getElementById('saturationText');

let saturationScrollOn = true;
let HSL = true;

let canvas = document.getElementById('canvas');
canvas.attributes
let ctx = canvas.getContext("2d");
let saturation = saturationSlider.value;

function drawCircle() {
    let radius = canvas.clientWidth/2;
    
    let image = ctx.createImageData(2 * radius, 2 * radius);
    let data = image.data;

    for (let x = -radius; x < radius; x++) {
        for (let y = -radius; y < radius; y++) {

            let [r, phi] = xy2polar(x, y);

            if (r > radius) {
                continue;
            }

            let deg = rad2deg(phi);

            // Figure out the starting index of this pixel in the image data array.
            let rowLength = 2 * radius;
            let adjustedX = x + radius;
            let adjustedY = y + radius;

            let pixelWidth = 4; // each pixel requires 4 slots in the data array
            let index = (adjustedX + (adjustedY * rowLength)) * pixelWidth;
            
            let hue = deg;
            let lightness = (radius-r)/radius;

            let rgb = [];

            if (HSL){
                rgb = 
                d3.hsl(hue, saturation/100, lightness)
                    .formatRgb()
                    .slice(4,-1)
                    .split(',');
            } else {
                // using sat as if chroma
                rgb = 
                d3.hcl(hue, (saturation/100*230), (140*lightness))
                    .formatRgb()
                    .slice(4,-1)
                    .split(',');
            }
            let alpha = 255;
            
            data[index] = rgb[0];
            data[index + 1] = rgb[1];
            data[index + 2] = rgb[2];
            data[index + 3] = alpha;
        }
    }
    // console.log('a random pt '+data[201600]+', '+data[201601]+', '+data[201602]);
    ctx.putImageData(image, 0, 0);

}

function xy2polar(x, y) {
    let r = Math.sqrt(x * x + y * y);
    let phi = Math.atan2(y, x);
    return [r, phi];
}

// rad in [-π, π] range
// return degree in [0, 360] range
function rad2deg(rad) {
    return ((rad + Math.PI) / (2 * Math.PI)) * 360;
}

drawCircle();

// time to actually use d3 for this assignment
// pretty shapes time

backgroundPattern = d3.select('#backgroundPattern');

bgWidth = window.innerWidth;
bgHeight = window.innerHeight;

bgShapes = []
shapeOptions = ['line', 'rect', 'circle', 'polygon']
shapeXs = ['x1','x','cx']
shapeYs = ['y1','y','cy']

for (let i=0; i<bgWidth/50; i++){
    for (let j=0; j<bgHeight/50; j++){
        
        let shape = Math.round(Math.random());

        if (shape == 1){
            shape = Math.round(Math.random()*3);
        }


        let x = i*50 + Math.round(Math.random()*10);
        let y = j*50 + Math.round(Math.random()*10);
        let rotation = Math.random()*Math.PI;
        
        bgShapes.push([shape,x,y,rotation]);
    }
}

function drawBackground(){
    
    d3.selectAll("svg > *").remove()

    let r = canvas.clientWidth/2;
    let image = ctx.getImageData(0, 0, r*2, r*2).data

    for (let i=0; i<bgShapes.length; i++){

        let shape = bgShapes[i];
        let shapeIndex = shape[0];
        let x = shape[1];
        let y = shape[2];
        let theta = shape[3];

        let r = canvas.clientWidth/2;
        randX = r + Math.round(r*Math.random()*Math.cos(theta));
        randY = r + Math.round(r*Math.random()*Math.sin(theta));

        //console.log("point? " + randX + " " + randY)

        let color = "rgb("+image.slice(randX*randY*4,randX*randY*4+3).join()+")";

        //console.log(shapeOptions[shapeIndex] + " " + x + " " + y + " " + theta);
        //console.log(color);

        switch(shapeIndex){
            case 0:
                // line

                backgroundPattern.append(shapeOptions[shapeIndex])
                .attr(shapeXs[shapeIndex], x)
                .attr(shapeYs[shapeIndex], y)
                .attr("x2", x + Math.round(20*Math.cos(theta))) 
                .attr("y2", y + Math.round(20*Math.sin(theta)))
                .style("stroke", color)
                .style("stroke-width", 3);
                break;

            case 1:
                // rect
                backgroundPattern.append(shapeOptions[shapeIndex])
                .attr(shapeXs[shapeIndex], x)
                .attr(shapeYs[shapeIndex], y)
                .attr("width", 20)
                .attr("height", 20)
                .attr("stroke", color)
                .style("stroke-width", 3)
                .style("fill", "none");
                break;

            case 2:
                // circle
                backgroundPattern.append(shapeOptions[shapeIndex])
                .attr(shapeXs[shapeIndex], x)
                .attr(shapeYs[shapeIndex], y)
                .attr("r", 10)
                .style("stroke", color)
                .style("stroke-width", 3)
                .style("fill", "none");
                break;

            case 3:
                // polygon, here: triangle
                let trianglePoints = [Math.cos(Math.PI*2/3+theta), Math.sin(Math.PI*2/3+theta), -Math.sin(Math.PI*2/3+theta), Math.cos(Math.PI*2/3+theta)];

                v1 = x + "," + y;
                v2 = (x+15*trianglePoints[0]) + "," + (y+15*trianglePoints[1]);
                v3 = (x+15*trianglePoints[2]) + "," + (y+15*trianglePoints[3]);
                
                let points = v1 + " " + v2 + " " + v3;
                //console.log("poly: "+points)

                backgroundPattern.append("polygon")
                    .attr("points", points)
                    .style("stroke", color)
                    .style("stroke-width", 3)
                    .style("fill", "none");

                break;
        }
    }
}

drawBackground();



satChromaToggle = document.getElementById('satChromaToggle');

function toggleSatChroma(){
    HSL = document.getElementById('satChromaToggle').getElementsByTagName('input')[0].checked;
    
    drawCircle();
    drawBackground();
    console.log("sat chroma toggled, hsl: " + HSL);
}

satChromaToggle.addEventListener('click', toggleSatChroma);


let lastScrollTop = pageYOffset;

saturationSlider.addEventListener("change", function(){
    saturation = saturationSlider.value;
    saturationText.value = saturation;
    drawCircle();
    drawBackground()
})

saturationText.addEventListener("change", function(){
    saturation = saturationText.value;
    saturationSlider.value = saturation;
    drawCircle();
    drawBackground()
})

let satScrollArea = document.getElementById('satScrollArea')

satScrollArea.addEventListener('scroll', function(){
    console.log(this.scrollTop);
    saturation = (536-this.scrollTop)/536;
    colorWheelInteractive.style.backgroundColor = 'hsl(30,'+saturation+'%,50%)';
    drawCircle();
    drawBackground();

    //console.log('sat: '+saturation+'%)')
});

// jQuery from wcloister's answer here: https://stackoverflow.com/questions/3680429/click-through-div-to-underlying-elements
satScrollArea.addEventListener('click', function(e){
    this.hidden = true;
    $(document.elementFromPoint(e.clientX, clientY)).trigger('click');
    this.hidden = false;
})

function toggleSaturationScroll(){
    saturationScrollOn = document.getElementById('satScrollToggle').getElementsByTagName('input')[0].checked;
}

colorWheelInteractive.addEventListener("scroll", function(){
    console.log(this.scrollTop);
    saturation = (536-this.scrollTop)/536;
    colorWheelInteractive.style.backgroundColor = 'hsl(30,'+saturation+'%,50%)';
    drawCircle();
    drawBackground();
    console.log('sat: '+saturation+'%)')
});

// https://stackoverflow.com/questions/31223341/detecting-scroll-direction



