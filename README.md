LOCATION OF MY GH-PAGES INDEX.HTML: https://jmckeen8.github.io/01-ghd3/index.html

In the sprit of the winter season, I decided to make a little snowman out of the various SVG shapes we were assigned to work with. Included are circles forming the snowman's body, a rectangle forming the border, lines forming the snowman's arms, and a polygon as a triangular carrot nose :-).
I apologize as I'm not really an artist so my picture-making skills probably won't hold a candle to some of the other submissions in the class. 

See screenshots here: https://imgur.com/a/646C7BQ.
Screenshot 1 shows the snowman as normal, screenshot 2 shows the snowman when a cursor is rolled over a part.

Design Achievement:
Using the various SVG elements we were assigned to work with, along with planning out the placement of these elements within a 400x400 SVG, a fun little piece of art was able to be constructed. This required using the various attributes of the SVG elements, such as X and Y placement, radius control for the circles, stroke width for the line and rectangle, and color for all of the elements. In addition, d3 style selectAll+data+enter+append SVG creation was used for several of the elements to import x/y data from arrays. 

Technical Achievement:
Using d3's transition() function, the individual parts of the snowman change colors when you roll over them with your mouse. The transition() function is bound to 'mouseover' to change the color when the mouse enters the boundary of the element, and to 'mouseout' to change the color back to the original when the mouse leaves the boundary of the element. 

Note: Example code from Lecture 1 was used as a base, as code from d3's "Three Little Circles" Tutorial https://bost.ocks.org/mike/circles/


Assignment 1 - Hello World: GitHub and d3  
===

This is a starting project to make sure you can write and host a webpage that generates graphics using d3. 

The primary goal is to be able to generate graphics primitives (circles, rectangles, lines, polygons) at different locations on the screen with different colors. 

The secondary goal is to introduce you to coding on GitHub, including creating a gh-pages branch to host your visualizations.

You may write everything from scratch, or start with demo programs from books or the web. 
If you do start with code that you found, you **must identify** the source of the code in your README and, most importantly, make non-trivial changes to the code to make it your own so you really learn what you're doing. 

For example, you could download one of the d3.js examples, read it through so you understand what it's doing, and then change the appearance of the graphical output to use different color schemes, different primitive shapes, different layouts of the primitives, and so on.

Resources
---

If you need a JavaScript/HTML/CSS refresher, see [JavaScript Codeacademy](https://www.codecademy.com/en/tracks/javascript) or find one of your choosing on the web.

If you need a Git/GitHub refreseher, some possible resources include [Getting Started with GitHub](https://help.github.com/categories/bootcamp/), the [GitHub Guides](https://guides.github.com/) (especially the ones on Hello World, and Understanding the GitHub Flow, and Forking Projects), and [CodeSchool's Try Git Course](https://www.codeschool.com/courses/try-git).

Requirements
---

1. Your project should contain at least four kinds of graphics primitives (circles, rectangles, lines, polygons) in different colors. 
2. Your document should identify the source of the code if you start with code that you found. 
3. Your code should be forked from the GitHub repo and linked using GitHub pages. See the "GitHub Details" section below for detailed instructions on how to do this.

GitHub Details
---

- Fork the GitHub Repository for Assignment 1. You now have a copy associated with your username.
- Make changes to index.html to fulfill the project requirements. 
- Make sure your "main" branch matches your "gh-pages" branch. See the GitHub Guides referenced above if you need help.
- Edit the README.md with a link to your gh-pages site "http://YourUsernameGoesHere.github.io/01-ghd3/index.html".

Submission Details
---
- To submit, make a [Pull Request](https://help.github.com/articles/using-pull-requests/) on the original repository.
- Note: name your pull request using the following scheme: 
```
a1-your Gh username-your first name-your lastname

```

Vis Details
---

For this project you should use d3.js. 
You can learn from examples on the [d3.js](http://d3js.org) site or start from scratch.

See the [Using d3js](https://github.com/mbostock/d3/wiki#using) documentation for how to run your own local server.

Creative solutions are welcome! In the past I've seen recreations of paintings, interactives, and more.

Go beyond the minimum requirements of this project.
Experiment with other aspects of the [d3 API](https://github.com/mbostock/d3/wiki/API-Reference) and [d3 Tutorials](https://github.com/mbostock/d3/wiki/Tutorials). 
Try making the elements interactive, for example, or animate them.

Grading
---

Grades are on a 120 point scale. 
96 points will be graded for functionality: the program does what the assignment requests with an informative README. 

We will use Google Chrome to view submissions. 
Be sure to test your code there.

Below are some, but not necessarily all, of the key points we will consider during grading:

- Circles and Rectangles  
- Lines  
- Polygons  
- Different colors  
- README Quality
    - A description of what you have created. 1-2 screenshots are recommended for the README.  
    - A working link to the hosted files (usually the gh-pages 'live' url)  
    - Section for Technical and Design Achievements

Technical Achievement Desription -- 12  
Design Achievement Description -- 12

Remember, it is up to *you* to define what constitutes a technical and design achievements.
Be ambitious as these are designed to allow you to shape your learning.
These are the only way to move from B to A territory.

