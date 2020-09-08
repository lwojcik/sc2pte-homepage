const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const { minify } = require("terser");

module.exports = function(config) {
  // minify css to output inline in head
  config.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  config.addTransform("htmlmin", function(content, outputPath) {
    if(outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }
    return content;
  });

  config.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  config.addLayoutAlias('page', 'layouts/page.njk');
  config.addPassthroughCopy({ assets: "/" });
}