https://romanwicky.github.io/01-ghd3/index.html

---- DESCRIPTION ----

I created a scene with some green grass, a house, and some interactive shapes

On the top left, there is a rainbow of rectangles, hovering over it will 
expand the shape of the rectangles, and mouse-out will shrink back to original size

The house becomes slightly clear when hovering over it

The sun shrinks and changes to orange when you hover over it

The small circle in the chimney will move to the top of the frame, and then reset

Clicking on the tree will reveal hidden circles behind it

A car image has been placed on the grass using an image loader from a local directory in the project file

-- Screenshot Links --

https://gyazo.com/3a75a6621e89b5726ae527ecc519c8a2

https://gyazo.com/05f1a7a265301f19b0d909f14ad002b5


-- Technical and Design Achievements --


polygon: 
I created a styled polygon that was then formed into a tree
Fill - green

Shapes / Line Generation: 
I used the path and line generator to create the window on my house
I then used lineGenerator on the path data, and fed it into a path to create the windows
To keep the path with no fill color, I create a style to set the fill to none


Transitions: 

Two Moons around sun repeat animation: 
Created a function that moves the moon around the planet, animation resets
after each run. Function mooncircle creates a small circle, and applies a looping animation
To create a looping animation, the beginning and end of the animation is the same location

Loading an image in svg:

For the car, I wanted to learn how to load an image from a local file path, and add it to the svg element
First, I created a folder called "imgs" which would hold any images I wanted to add into the svg
Then, I loaded the image (svg.append('image)')) and scaled / positioned it correctly. This will
be useful to know for future project when I want to add icons!

-- Online Resources Used:
http://using-d3js.com/05_09_polygons.html
-
https://www.d3indepth.com/shapes/
-
https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect
-
https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image
