Assignment 1 - Hello World: GitHub and d3  
===
---
[https://pooja-a-patel.github.io/01-ghd3/index.html](https://pooja-a-patel.github.io/01-ghd3/index.html)  

For this assignment I decided to use the d3 shapes to create a beachfront image overlooking a sunset. The image incorporates the graphic primitives: circles, rectangles, lines, and polygons. The circles were used to create the sun, the rectangles were used to create the ocean  and tree stump, lines were used to create a horizon and the sand area, and the polygons were used to create the bird, and tree layers.
![image](https://github.com/pooja-a-patel/01-ghd3/blob/main/SVG_Image.png)

I used two color schemes to make the imagery more appealing, one for the background sunset gradient and one for the tree.
![image](https://github.com/pooja-a-patel/01-ghd3/blob/main/OrangeColors.PNG)
![image](https://github.com/pooja-a-patel/01-ghd3/blob/main/GreenColors.PNG)

## Requirements
1. Your project should contain at least four kinds of graphics primitives (circles, rectangles, lines, polygons) in different colors.  
    :heavy_check_mark: Circles :heavy_check_mark: Rectangles :heavy_check_mark: Lines :heavy_check_mark: Polygons  
2. Your document should identify the source of the code if you start with code that you found.  
    :heavy_check_mark: Mentioned in the **Resources** section
3. Your code should be forked from the GitHub repo and linked using GitHub pages. See the "GitHub Details" section below for detailed instructions on how to do this.  
    :heavy_check_mark: [https://pooja-a-patel.github.io/01-ghd3/index.html](https://pooja-a-patel.github.io/01-ghd3/index.html)

## Technical Achievements
- **Animated background**: I animated the background-color of the webpage to cycle through several colors to give the effect of a sunset over time. The background uses setInterval() to cycle through the assigned colors at a established time.
- **Animated bird on-hover**: I animated the bird in the image to switch between black and white depending on if a user is hovering over the polygon.

## Design Achievements
- **Incorporated a color palette**: Two color gradients were used to make the image more appealing. The orange shceme was used for the sunset in the background. The green scheme was used for the tree layers.

## Resources
- The program was started from the demo code presented in the first class. From there I adapted the shapes and attributes to create a sunset scenery.
- I used two color schemes that were orgnized by [w3schools](https://www.w3schools.com/colors/colors_groups.asp)
- The code for the gradient background was adapted from [java2s](http://www.java2s.com/Code/JavaScript/Development/UsingsetIntervaltoRepeatedlyChangetheDocumentBackgroundColor.htm)
