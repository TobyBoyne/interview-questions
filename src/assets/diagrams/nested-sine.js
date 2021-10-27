// layout
// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("#nested-sine")
  .append("svg")  
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",  "translate(" + margin.left + "," + margin.top + ")");


// handle data
var xrange = d3.range(0, 100, 0.1)

function f(x) {
  return Math.sin(Math.sin(x))
}

var lineFunc = d3.line()
  .x(function(d) { return x(d) })
  .y(function(d) { return y(f(d)) })
  
// axes
var x = d3.scaleLinear()
  .domain(d3.extent(xrange))
  .range([0, width])
svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x));

console.log(d3.extent(xrange, function(d) { return +f(d); }))

var y = d3.scaleLinear()
  .domain(d3.extent(xrange, function(d) { return +f(d); }))
  .range([ height, 0 ]);
svg.append("g")
  .call(d3.axisLeft(y));
   
svg.append("path")
  // .datum(data)
  .attr("stroke", "steelblue")
  .attr("stroke-width", 1.5)
  .attr("fill", "none")
  .attr("d", lineFunc(xrange))





