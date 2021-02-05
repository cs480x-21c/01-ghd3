Assignment 1 - Hello World: GitHub and d3  
Clay Oshiro-Leavitt
2.5.2021
GitHub Pages: https://clay-ol.github.io/01-ghd3/index.html
===

Requirements
---

1. Your project should contain at least four kinds of graphics primitives (circles, rectangles, lines, polygons) in different colors.
Completed: Circles, rectangles, lines, and polygons are used with various colors.
2. Your document should identify the source of the code if you start with code that you found. 
The basis of the code was formed from the in class example of January 28th - attributes, noncircle primatives, image support, and grouping information were found from the d3js documentation.
3. Your code should be forked from the GitHub repo and linked using GitHub pages. See the "GitHub Details" section below for detailed instructions on how to do this.
This has been done.

For this project, I opted to use primitives to draw one of my favorite personal possessions, my Olympus 35RC rangefinder camera. Using a combination of of primitives and colors, I was able to create a passable representation of the camera itself, mainly consisting of rectangles for the body, circles for the lens, and assorted manually defined polygons for the topplate components. Further down the page, I created a simple deliniation between this using a thick black line. Here, I decided to add a second camera. Rather than draw another by hand, I decided to read about how to import images such as jpgs into d3js. It was a rather simple affair using 'svg.append("svg:image")' with an appropriate href definition in the attributes. Lastly, I wanted to experiment more with data binding and events. For this, I created a simple set of 3 rectangles, each bound to a value in a defined array. Rather than use boring predefined colors, I used a hex selector to choose a pretty raspberry color. There are two events that these rectangles can have - one is a mouseover with color change, the other is clicking to remove the element. After an initial failed attempt to implement this (I accidentally set it to remove *all* instances of rectangles on the page), I realized that using the 'this' keyword would be much simpler. 

For this project, I felt that I accomplished the following achievements:

Technical:
Delete primitive on click - this required a (albeit simple) event listener for each primitive that had this enabled.

Image importing to d3js - this required researching other supported formats for display with svg and d3js.

Design:
Nonnegligible graphic creation (35RC Camera) - the use of multiple primitives, colors, element stacking, and 2d positioning was a nontrivial task to create a representative image of a real object.

Nondefault attributes and colors - the use of attributes such as stroke-width, stroke (for primitives other than lines), and RGB defined colors illustrate that I have learned other graphical tools for visual design in d3js.

Please see the Readme directory for screenshots of the page.


