var dataFromJson = [];

var response = fetch('data.json')
    .then(response => response.json())
    .then(data => {
        dataFromJson = data;
        drawCircles();
    })
    .catch(error => console.log(error));

    function drawCircles() {
        var svg = d3.select("#theo");
    
        const width = parseInt(svg.style("width"));
        const height = parseInt(svg.style("height"));
    
        const minMaxXValues = d3.extent(dataFromJson, d => d.x);
        const minMaxYValues = d3.extent(dataFromJson, d => d.y);
    
        const xScale = d3.scaleLinear()
            .domain(minMaxXValues)
            .range([0, width]);
    
        const yScale = d3.scaleLinear()
            .domain(minMaxYValues)
            .range([height, 0]);
    
        dataFromJson.forEach(function(d) {
            svg.append("circle")
                .attr("cx", xScale(d.x))
                .attr("cy", yScale(d.y))
                .attr("r", d.value)
                .style("fill", function() {
                    if (d.value >= 10 && d.value < 20) {
                        return "blue";
                    } else if (d.value >= 20 && d.value < 30) {
                        return "pink";
                    } else {
                        return "green";
                    }
                });
        });
    }
    