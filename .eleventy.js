const katex = require('katex')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/images");
    eleventyConfig.addPassthroughCopy("./src/assets/css");

    eleventyConfig.addFilter('latex', content => {
        return content.replace(/\$\$(.+?)\$\$/g, (_, equation) => {
          const cleanEquation = equation
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
      
          return katex.renderToString(cleanEquation, { throwOnError: false })
        })
      })

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: false,

        dir: {
            input: "src",
            output: "docs"
        }
    };
};