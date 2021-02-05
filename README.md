# README
Assignment 1 - Hello World: GitHub and d3  
===
https://hcaouette.github.io/01-ghd3/
Author: Hunter Caouette
===
## Tech Achievements
- implemented favicons for website that are compatible with multiple browser types
    - The art in the favicon is of the Magic: the Gathering card 'Meren of Clan Nel Toth'. It is illustrated by Mark Winters and is property of Wizards of the Coast LLC.
    - The favicon set was generated from a jpg file and the code in the head tag were both provided by https://realfavicongenerator.net/
- I made an interactive 'scatterplot' which highlights a cards name when you hover over the corresponding dot.
- The decks mana curve (bar graph) highlights all cards in the decklist with the corresponding converted mana cost.
- I Used Scryfall to show images of cards; The images are fetched when interacting with both the  scatterplot and the decklist sections.
    - https://scryfall.com/docs/api
    - I also wrote a python script (scrape.py) to retrieve image URIs from the scryfall API.

## Design Achievements
- I made the mana cost scatterplot reflect both the cards color(s) and their converted mana costs
    - mana cost is used for the (scaled) y-position and the circles radius

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