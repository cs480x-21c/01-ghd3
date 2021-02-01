class LineMaker
{
    constructor(svg)
    {
        let lines = [0];


        this.svg = svg;
        // this.svg.append('line')
        //     .style("stroke", "lightgreen")
        //     .style("stroke-width", 10)
        //     .attr("x1", 0)
        //     .attr("y1", 0)
        //     .attr("x2", 100)
        //     .attr("y2", 0);

        this.svg.selectAll('line')
            .data(lines)
            .enter().append('line')
            .style("stroke", "lightgreen")
            .style("stroke-width", 10)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 100)
            .attr("y2", 0)
            .on('mouseover', function (e, d)
                {

                    d3.select(this).attr("x1", e.x);
                    d3.select(this).attr("y1", e.y);
                });
    }

}