Description
---

I created a mildly faithful reproduction of Piet Mondrian's [Composition with Red Blue and Yellow](https://en.wikipedia.org/wiki/Composition_with_Red_Blue_and_Yellow). Hovering over each of the colored squares will transform it into a different shape of the same color- the blue and yellow squares transform into circles and the red square becomes a seven-sided polygon.

Working link to hosted files
---
http://pbcoady.github.io/01-ghd3/index.html

Technical and Design Achievements
---
Technical Achievements: All of the graphics primitives (aside from the polygon) were created using data binding, condensing the entire code into less than 75 lines. There are 11 shapes altogether, but they were created in only four statements. Like the in-class example of steel blue circles, the hovering logic was also applied to every square using data binding.

Design Achievements: This vis is as faithful of a reproduction of a famous painting as I could make it without getting into exact mathematics. A "transforming" effect was achieved simply by hiding the same-colored shapes inside their respective original squares. This makes it less technically impressive, but it still looks kinda neat.

Screenshots
---
https://drive.google.com/file/d/1_0ODQK_qvLVzpyTphtFBxH1bJRWAGkDL/view?usp=sharing
https://drive.google.com/file/d/1dY7ZI5Dma-cl45vsAk0cJ_S1vhs2d4ev/view?usp=sharing
https://drive.google.com/file/d/1DGx41tiJJXxfWZjEYcLWrPFjNDmaNsOK/view?usp=sharing
https://drive.google.com/file/d/1ui7DtxsQ3kti7sQ76rCez7x3cSZ6XOLn/view?usp=sharing

Sources
---
The polygon code is a combination of material from https://www.d3-graph-gallery.com/graph/shape.html and https://stackoverflow.com/questions/13204562/proper-format-for-drawing-polygon-data-in-d3, although the former does not contain guides for how to create a polygon and the latter does so using data binding. The latter source, along with the code for the steel blue circles in-class example, also formed the basis for the data binding statements.
