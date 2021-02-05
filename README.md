Drumkit: CS480x Assignment 1 by Jean-Philippe Pierre
===

![Image of webpage](./img/screenshot.png)

Drumkit is a drum set that a user can play in their browser. The web application displays a drum set consisting of a kick drum, two tom-tom drums, a snare drum, a hi-hat, a floor tom, and a cymbal. Users can play the drums by clicking on them or by pressing their corresponding keys. The key bindings for each drum are:

* Kick Drum: B
* Left Tom-tom: G
* Right Tom-tom: H
* Snare Drum: N
* Hi-hat: M
* Low Tom: V
* Cymbal: F

Link to the webpage: [https://japierreswe.github.io/01-ghd3/index.html](https://japierreswe.github.io/01-ghd3/index.html)

## Technical Achievements
* Animations occur when a user plays each drum. Because the drums often contained numerous SVG elements, SVG groups were used to animate entire drums. d3's transition feature was used to to scale and rotate the drums.
* Users can play the drums by clicking on them or by pressing keys. An event listener was used to respond to key input. In addition, each drum's SVG group used a mouse listener to respond to mouse events.
* A checkbox, an SVG group, and an onclick listener were used to implement a tooltip feature that the user could toggle.
* Javascript's HTMLAudioElement API was used to play sounds when drums are played.

## Design Achievements
* Animating the drums when the user plays them was a design choice to let the user know which drums were being played.
* The tooltip feature was implemented to make it easier for users to learn how to play the drums. They are enabled by default to make it easier for new users to learn.
* The tooltips can be turned off in case the user does not want to see them.
* The layout of the key bindings is similar to the layout of the drums on the screen. This was intended to make the key bindings more intuitive.
* To let the user know that they can play the drums by clicking on them, the mouse cursor changes to a pointer when the user hovers over the drums.
* The cymbal is animated differently from the other drum equipment to imitate the movement of a real cymbal.