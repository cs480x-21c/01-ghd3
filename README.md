Assignment 1 - Hello World: GitHub and d3
===

My project can be found at [http://brian-earl.github.io/01-ghd3/index.html](http://brian-earl.github.io/01-ghd3/index.html), however, the URL will be changed from brian-earl.github.io to bearl.dev due to how I have my GitHub page set up.


Project Description
---

For my project I create a webpage where on startup, a number of rectangles and circles will randomly placed all over the canvas. Additionally, each shape will have a randomly chosen color with circles choosing colors from the Category10 color set and rectangles choosing from the Tableau10 color set. Underneath the canvas is a set of radio and normal buttons. The set of radio buttons will toggle between displaying a set of lines (Show Path), a polygon (Show Polygon) or neither (Hidden). The lines displayed will form a black path connecting all of the shapes. The polygon displayed will take the path used for the lines, connect it into a loop and then generate a grey polygon using it. Underneath the radio buttons are a set of two regular buttons. The first one, labeled "Shuffle Path" will randomly rearrange the path the line and polygon will take between shapes. The other button, labeled "Regenerate Shapes" will remove all of the shapes currently on the canvas and generate a new set as well as an accompanying path.

The base code are started with was the demo code used from the first day of class. While searching around, I found [https://observablehq.com/@d3/click-vs-drag](this example) which I partially integrated to generate the circles and I then reused and adapted to generate the rectangles as well. I used these three articles, [one](https://www.d3-graph-gallery.com/graph/shape.html), [two](https://www.geeksforgeeks.org/d3-js-line-method/) and [three](http://using-d3js.com/05_09_polygons.html), to learn about how to create the other shapes needed for the project. Additionally, the method I used to shuffle the array containing the points for the path came from [this](https://javascript.info/task/shuffle) article.


Technical Achievement
---

- I figured out how to removed elements from the canvas after they've already been placed.
- I learned how to call functions when altering d3 elements and adding their attributes as well as send attributes to said functions such as when I use
    >.each(function(d){
    >  lineData.push([d.x,d.y])
    >})
    to add each shapes point to a list to generate the path later.
- I learned how get colors from a palette instead of selecting colors individually as well as selecting a random color from said palette.


Design Achievement
---

- When shuffling the path or regenerating the shapes, the state the path and polygon's display is preserved. For example, if the path is set to show when the path is shuffled, it will remain showing and update to display the new path, the same is true for when regenerating shapes.
- A border has been places around the SVG canvas to show the user the range in which the shapes can be randomly displayed.