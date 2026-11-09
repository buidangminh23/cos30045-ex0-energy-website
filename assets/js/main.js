// GenAI: steps follow the Exercise 4.2 brief; drafted with Claude Opus 5.5 and reviewed by me

d3.select("h1")
  .style("color", "lightgreen");

d3.selectAll("h2")
  .style("letter-spacing", "1px");

d3.select(".container")
  .append("p")
    .text("Purchasing a low energy consumption TV will help with your energy bills!");

d3.select("svg")
  .append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 100)
    .attr("height", 30)
    .style("fill", "green");
