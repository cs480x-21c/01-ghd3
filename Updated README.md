Assignment 1 - Hello World: GitHub and d3  
===

Project Description
===

[Link to the project on my git-hub pages](https://ao-joker.github.io/01-ghd3/)
Now the actual link: https://ao-joker.github.io/01-ghd3/

Within this project, I was tasked with creating four shapes (a circle, a rectangle, a line, and a polygon) each of a different color. I have most certainly achieved this. The four main shapes that are present include a blue circle, a purple rectangle, a green line, and a black/red hexagon. Other rectangles and polygons are also found within this project, each with specific colors. With this assignment, I was able to gather an understanding of how to use d3 and javascript as a result. It was useful to learn some of the elements of javascript I did not know, and knowledge of d3. In addition, I have not used GitHub prior to this. I was able to learn how to use it, at least for obtaining, editing, and submitting a project. Based on what we discussed in lecture on 02/04/21, this is one for enjoyment :)

The concept of this project was focused on interactivity when I first came up with it. The background knowledge is somewhat spelled out in the description of the project that appears on the HTML page. Nevertheless, here it is again. This project shows off four particular shapes that are very shy. Being as such, they really do not like too much attention. In this laboratory, under the guidance of one of the scientists (the imported png) you get to examine and "study" these four different, timid shapes. There are four red rectangles that are buttons. Each of these buttons have an entry that describe what the shape does when you interact (rather try to interact) with the shapes. 

The four shy shapes and what they do is listed here. 
    - The blue cicrle teleports around as you try to approach it. In other terms, as you mouseover the circle, it moves to a different    position, and then moves to another random position to not have it be trailed as quickly (the second part is part of a page reload).
    - The purple rectangle stresses out when you interact with it and breaksdown - quite literally! In other terms, the rectangle disappears when you mouseover it. A new, distorted polygon is draw in place before the page is reloaded once the mouse is removed from the original shape's position.
    - The green line is so shy that the instant it is interacted with directly the line vanishes. In other terms, as you mouseover the line, the line changes color to match the background so it cannot be seen. Once you move the mouse off the line, the line returns to its original color.
    - The black/red polygon is so shy that it frezes when you enter within the vicinity. As you approach it, the shape begins to get more red in color - blushing out of nervousness as you get closer. In other terms, the color of the polygon becomes more red as the distance between the "midpoint" of the hexagon and the mouse decrease.

Technical Achievement
===
There are a few specific things I would like to mention and qualify under technical achievement. These all center around the aspect of interactivity. They are listed below:
    - While we did investigate mouseover functions on shapes in class, I have coded and used additional mouse and object/element interaction function to create a button. Using the mouseclick aspect of d3, clicking the button will print a message to provide some details of the four shapes. 
    - Along with other mouseover function, I utilized the mousemove function. This function is set to detect the mouse's position in the svg rectangle with the polygon (the box with polygon in it). The position is recorded and the distance between the "midpoint" of the hexagon and the mouse position is calculated. This is used to adjust the color of the polygon so that it appears to blush as it is approached.

Design Achievement
===
There are two specific design elements I would like to acknowledge as a design achievement. These really center around presentation and enjoyment. They are listed below:
    - I used d3 to be able to import the image of a scientist (found below the buttons and included as the file science.png) into my project. Adding this helps ground the concept of the shy shapes laboratory, and puts a nice touch on the project. Getting this practice may prove to be useful in future projects in this class.
    - I used de to add text to the project. This text also helps ground the project in some context. This practice will definetly be useful in future projects for this class.

Citations/References
===
[The scientist image is obtained from this site under the Creative Commons License](https://iconscout.com/illustration/scientist-2671529) -
[The d3 API was very useful in understanding the functions avilable to me](https://github.com/d3/d3/wiki) -
[This site showed me the code to add many other mouse related movement events](https://jarrettmeyer.com/2018/06/21/d3-capturing-mouse-events) -
[Despite the interesting name of the link, this site was used for reference in generating text](http://www.d3noob.org/2014/05show-hide-d3js-element-by-clicking-on.html)

Project Photos
===
See documents labeled "Photo 1", "Photo 2", and "Photo 3" that are alongside the other files in the submission. Photo 1 shows the page. Photo 2 shows when one of the buttons is clicked. Photo 3 shows an interaction with the rectangle, and shows off the change of color as you approach the hexagon.

Original Assignment Description
===
This is a starting project to make sure you can write and host a webpage that generates graphics using d3. 

The primary goal is to be able to generate graphics primitives (circles, rectangles, lines, polygons) at different locations on the screen with different colors. 

The secondary goal is to introduce you to coding on GitHub, including creating a gh-pages branch to host your visualizations.

You may write everything from scratch, or start with demo programs from books or the web. 
If you do start with code that you found, you **must identify** the source of the code in your README and, most importantly, make non-trivial changes to the code to make it your own so you really learn what you're doing. 

For example, you could download one of the d3.js examples, read it through so you understand what it's doing, and then change the appearance of the graphical output to use different color schemes, different primitive shapes, different layouts of the primitives, and so on.

Requirements
---

1. Your project should contain at least four kinds of graphics primitives (circles, rectangles, lines, polygons) in different colors. 
2. Your document should identify the source of the code if you start with code that you found. 
3. Your code should be forked from the GitHub repo and linked using GitHub pages. See the "GitHub Details" section below for detailed instructions on how to do this.


