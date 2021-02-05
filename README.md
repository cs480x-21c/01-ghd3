Assignment 1 - Hello World: GitHub and d3  
===

You may write everything from scratch, or start with demo programs from books or the web. 
If you do start with code that you found, you **must identify** the source of the code in your README and, most importantly, make non-trivial changes to the code to make it your own so you really learn what you're doing. 

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



# README
https://hcaouette.github.io/01-ghd3/
Author: Hunter Caouette

## Design Achievements

## Tech Achievements
- implemented favicons for website that are compatible with multiple browser types
    - The art in the favicon is of the Magic: the Gathering card 'Meren of Clan Nel Toth'. It is illustrated by Mark Winters and is property of Wizards of the Coast LLC.
    - The favicon set was generated from a jpg file and the code in the head tag were both provided by https://realfavicongenerator.net/
- Interactive visualization of spells as a scatterplot highlights cards name when hovering on the corresponding dot.
- Interactive mana curve highlights all cards in deck with the corresponding converted mana cost.
- use of scryfall to show preview images of cards; interactive from both mana scatterplot and decklist sections.
- wrote a python script to scrape the scryfall API for image URIs.

## Misc.


### credits
- https://datawanderings.com/2018/08/15/d3-js-v5-promise-syntax-examples/
    - helped with promise syntax with d3.csv
- https://www.dashingd3js.com/d3-tutorial
    - general help.
- https://gramener.github.io/d3js-playbook/d3intro.html
    - more help.
- https://stackoverflow.com/questions/5788741/remove-commas-from-the-string-using-javascript
    - string recplacement with regular expressions.
- https://stackoverflow.com/questions/3846015/flip-svg-coordinate-system/38811507#38811507
    - inverting svg coordinate system.
- https://bl.ocks.org/lwthatcher/5456840f796632c27edc813ce8ab4719
    - polygon example