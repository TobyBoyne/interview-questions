// layout
// set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

const can = {width: 100, height: 200}

var r = 50
var x = 50

var svg = d3.select("#com-of-can")
  .append("svg")  
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  
var svgCan = svg.append("g")
  .attr("transform",  "translate(" + margin.left + "," + margin.top + ")");

// controls
var sliderx = d3.select("#com-of-can").append("input")
  .attr("type", "range")
  .attr("min", "0")
  .attr("max", "100")
  .attr("value", "50")
  .on("input", function(d) {
    let value = this.value
    x = (value / 100) * can.height
    updateCan(x)
  })


var sliderr = d3.select("#com-of-can").append("input")
  .attr("type", "range")
  .attr("min", "0")
  .attr("max", "100")
  .attr("value", "50")
  .on("input", function(d) {
    let value = this.value
    let pow = (value - 50) / 25
    r = 10 ** (pow)
    updateCan(x)
  })

// draw can with liquid
var fluid = svgCan.append("rect")
  .attr('width', can.width)
  .attr('fill', 'lightblue');

svgCan.append("rect")
  .attr('width', can.width)
  .attr('height', can.height)
  .attr('stroke', 'black')
  .attr('fill', 'none');

// CoM lines
var comFluid = svgCan.append("line")
  .attr("x1", 0)
  .attr("x2", can.width)
  .attr("stroke", "blue")
  .attr("stroke-dasharray", 4)
  .attr("stroke-width",  2)

svgCan.append("line")
  .attr("x1", 0)
  .attr("x2", can.width)
  .attr("y1", can.height / 2)
  .attr("y2", can.height / 2)
  .attr("stroke", "black")
  .attr("stroke-dasharray", 4)
  .attr("stroke-width",  2)

var comCombined = svgCan.append("line")
  .attr("x1", 0)
  .attr("x2", can.width)
  .attr("stroke", "red")
  .attr("stroke-dasharray", 4)
  .attr("stroke-width",  3)


function centreOfMass(x, r) {
  // given the height of water, find the centre of mass
  const H = can.height / 2
  return (r * H + .5 * x**2) / (r + x)
}


function updateCan(x) {
  // called whenever slider is updated
  const com = centreOfMass(x, r)

  fluid.attr("height", x)
    .attr("y", can.height - x)

  comFluid.attr("y1", can.height - x / 2)
    .attr("y2", can.height - x / 2)

  comCombined.attr("y1", can.height - com)
    .attr("y2", can.height - com)
}

// call update on load
updateCan(50)

