const loadScripts = (src) => {
  return new Promise(function (resolve, reject) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const scriptsLoaded = loadScripts("https://d3js.org/d3.v7.min.js")
  .then(() => loadScripts("https://unpkg.com/d3-cloud/build/d3.layout.cloud.js"))
  .then(() => true);

export default scriptsLoaded;
