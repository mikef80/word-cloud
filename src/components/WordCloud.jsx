import { useEffect, useState } from "react";
import loadedScripts from "../utils/loadScripts.js";
import computeWordFrequencies from "../utils/computeWordFrequencies.js";

const WordCloud = ({ text}) => {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 });

  useEffect(() => {
    async function fetchData() {
      return await loadedScripts;
    }
    fetchData().then((res) => setScriptsLoaded(res));
  }, []);

  const words = computeWordFrequencies(text);

  useEffect(() => {
    if (scriptsLoaded) {
      // Create the layout for the word cloud
      const layout = d3.layout
        .cloud()
        .size([dimensions.width, dimensions.height])
        .words(words)
        .padding(2)
        .rotate(() => 0)
        // .font("Open Sans")
        .fontSize((d) => d.size * 20) // Adjust the multiplication factor to scale font sizes
        .on("end", draw);

      layout.start();

      // Draw function to render the word cloud
      function draw(words) {
        d3.select(".word-cloud")
          .append("svg")
          .attr("width", dimensions.width)
          .attr("height", dimensions.height)
          .append("g")
          .attr(
            "transform",
            "translate(" + dimensions.width / 2 + "," + dimensions.height / 2 + ")"
          )
          .selectAll("text")
          .data(words)
          .enter()
          .append("text")
          .style("font-size", (d) => d.size + "px")
          .style("fill", () => "black")
          .attr("text-anchor", "middle")
          .attr("transform", (d) => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
          .text((d) => d.text)
          .on("click", function (event, d) {
            console.log(event);
            alert("You clicked on: " + d.text);
          })
          .on("mouseover", function (event, d) {
            d3.select(this)
              .transition()
              .duration(400)
              .style("font-size", d.size * 1.1 + "px")
              .style("fill", "#3390E7");
          })
          .on("mouseout", function (event, d) {
            d3.select(this)
              .transition()
              .duration(400)
              .style("font-size", d.size + "px")
              .style("fill", "black");
          })
          .style("cursor", "pointer");
      }
    }
  }, [scriptsLoaded]);

  return <div className='word-cloud'></div>;
};

export default WordCloud;
