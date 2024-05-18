import { useEffect, useState } from "react";
import loadedScripts from "../utils/loadScripts.js";
import computeWordFrequencies from "../utils/computeWordFrequencies.js";

const WordCloud = ({ text, rotate }) => {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 });

  useEffect(() => {
    async function loadScripts() {
      const result = await loadedScripts;
      setScriptsLoaded(result);
    }

    loadScripts();
  }, []);

  useEffect(() => {
    if (!scriptsLoaded) return;

    const words = computeWordFrequencies(text);

    // Create the layout for the word cloud
    const layout = d3.layout
      .cloud()
      .size([dimensions.width, dimensions.height])
      .words(words)
      .padding(2)
      .rotate(() => (rotate ? (Math.random() > 0.5 ? 90 : 0) : 0))
      .fontSize((d) => d.size * 20)
      .on("end", draw);

    layout.start();

    // Draw function to render the word cloud
    function draw(words) {
      d3.select(".word-cloud").select("svg").remove();
      const svg = d3
        .select(".word-cloud")
        .append("svg")
        .attr("width", dimensions.width)
        .attr("height", dimensions.height);

      const g = svg
        .append("g")
        .attr("transform", `translate(${dimensions.width / 2}, ${dimensions.height / 2})`);

      g.selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", (d) => `${d.size}px`)
        .style("fill", "black")
        .attr("text-anchor", "middle")
        .attr("transform", (d) => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
        .text((d) => d.text)
        .on("click", (event, d) => {
          alert(`You clicked on: ${d.text}
          Occurences: ${d.size / 20}`);
        })
        .on("mouseover", function (event, d) {
          d3.select(this)
            .transition()
            .duration(400)
            .style("font-size", `${d.size * 1.1}px`)
            .style("fill", "#3390E7");
        })
        .on("mouseout", function (event, d) {
          d3.select(this)
            .transition()
            .duration(400)
            .style("font-size", `${d.size}px`)
            .style("fill", "black");
        })
        .style("cursor", "pointer");
    }
  }, [scriptsLoaded, text, dimensions, rotate]);

  return <div className='word-cloud flex p-2'></div>;
};

export default WordCloud;
