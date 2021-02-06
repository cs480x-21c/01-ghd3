Assignment 1 - Hello World: GitHub and d3  
===
https://wisterick.github.io/01-ghd3/index.html

A color wheel with a fun background consisting of randomly chosen shapes of random colors. The toggle controls HSL or HCL color mapping, and the slider controls either saturation or chroma.

The colors of the shapes in the background are picked from those displayed on the color wheel.

Technical achievement: Interactive based on the HCL and HSL toggle and saturation/chroma alterations. responsive color picking of background shapes.

Design achievement: Scattered shapes in background, dynamic positioning of controls for different screen sizes.


![Image of Assignment 1](https://raw.githubusercontent.com/wisterick/01-ghd3/main/colorWheelBGPattern.png)

**Found code:**

1. Static canvas color wheel: https://codepen.io/bantic/pen/vgyBWx
Modifications: hsl instead of hsv, using d3 to convert hsl to rgb, gradient lightness radially instead of saturation

2. Toggle switch: https://www.w3schools.com/howto/howto_css_switch.asp 

3. Vertical slider (gilly3's answer): https://stackoverflow.com/questions/15935837/how-to-display-a-range-input-slider-vertically 
