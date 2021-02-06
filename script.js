

console.log(d3); // test if d3 is loaded

function loadCircles(data){
    var puerto = d3.select("#puerto").append("svg").attr("width",1400).attr("height",1150)

    //circles
    var x = 50;
    var y = 50;
    for(i=0;i<data.length;i++){
        current = data[i]
        puerto.append('circle')
            .attr('cx',x)
            .attr('cy', y)
            .attr('r', (parseInt(current[2])/20))
            .attr('stroke', 'blue')
            .attr('fill', "rgb("+x/3+","+x/6+",52)");
            
        x = x + 70
        y = y + 50
    }

    //year 
    x = 30;
    y = 105;
    for(i=0;i<data.length;i++){
        current = data[i]
        puerto.append('text')
            .attr('x',x)
            .attr('y', y)
            .attr('id', "year"+i)
        var year= document.getElementById("year"+i)
        year.innerHTML= current[0]
        x = x + 70
        y = y + 49
    }
    // names
    x = 30;
    y = 125;
    for(i=0;i<data.length;i++){
        current = data[i]
        puerto.append('text')
            .attr('x',x)
            .attr('y', y)
            .attr('id', "name"+i)
        var name= document.getElementById("name"+i)
        name.innerHTML= current[1]
        x = x + 70
        y = y + 49
    }


    //polygon
    puerto.append('polygon')
            .attr('points',"50,600 47,635 40,650 20,660 25,670 50,680 60,730 40,800 200,780 240,790 300,780 400,790 450,700 510,650 510,610 450,600")
            .attr('stroke', '#d8052f')
            .attr('fill', "#2e3b84");

    puerto.append('line')
        .attr('x1',"50")
        .attr('y1', '600')
        .attr('x2', '200')
        .attr('y2', '700')
        .attr('stroke', "white");
    puerto.append('line')
        .attr('x1',"200")
        .attr('y1', '700')
        .attr('x2', '45')
        .attr('y2', '800')
        .attr('stroke', "white");
    puerto.append('line')
        .attr('x1',"95")
        .attr('y1', '630')
        .attr('x2', '520')
        .attr('y2', '630')
        .attr('stroke', "white");
    puerto.append('line')
        .attr('x1',"155")
        .attr('y1', '670')
        .attr('x2', '520')
        .attr('y2', '670')
        .attr('stroke', "white");
    puerto.append('line')
        .attr('x1',"155")
        .attr('y1', '730')
        .attr('x2', '520')
        .attr('y2', '730')
        .attr('stroke', "white");
    puerto.append('line')
        .attr('x1',"95")
        .attr('y1', '768')
        .attr('x2', '520')
        .attr('y2', '768')
        .attr('stroke', "white");


}

function loadRectangles(data){
    var occurances = d3.select("#puerto").append("svg").attr("width",1400).attr("height",1300)
    var x = 50;
    var y = 50;
    for(i=0;i<data.length;i++){
        current = data[i]
        occurances.append('rect')
            .attr('x',50)
            .attr('y', y)
            .attr('height', 20)
            .attr('width', (current[2]))
            .attr('stroke', 'blue')
            .attr('fill', "rgb("+x/3+","+x/6+",52)");
            
        x = x + 70
        y = y + 50
    }
    //names 
    x = 1000;
    y = 50;
    for(i=0;i<data.length;i++){
        console.log("hello")
        current = data[i]
        occurances.append('text')
            .attr('x',1000)
            .attr('y', y)
            .attr('id', "recnames"+i)
        var name= document.getElementById("recnames"+i)
        name.innerHTML= current[1]
        //x = x + 70
        y = y + 51
    }

    // number
    x = 1000;
    y = 50;
    for(i=0;i<data.length;i++){
        current = data[i]
        occurances.append('text')
            .attr('x',1100)
            .attr('y', y)
            .attr('id', "occurances"+i)
        var number= document.getElementById("occurances"+i)
        number.innerHTML= current[2]
       // x = x + 70
        y = y + 51
    }

}

function loadData(){
    var mostPopularNames = []
    d3.csv("/PuertoRicoNames.csv").then(function(data){
        currentYear= "1998"
        for (i=0;i<data.length;i++){
            console.log(currentYear == data[i].birth)
            if (currentYear == data[i].birth){
                mostPopularNames.push([currentYear,data[i].name,data[i].occurrences])
                currentYear= String(parseInt(currentYear)+1)
            }
        }
        loadCircles(mostPopularNames)
        loadRectangles(mostPopularNames)
    });
    
}
loadData()

//document.getElementById("puerto").innerHTML = "Hello JavaScript!";


// create svg element:

// Add the path using this helper function