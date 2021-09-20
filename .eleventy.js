const katex = require('katex')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/images");
    eleventyConfig.addPassthroughCopy("./src/assets/css");

    // 11tydata.json files add tags instead of replace them
    eleventyConfig.setDataDeepMerge(true);

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