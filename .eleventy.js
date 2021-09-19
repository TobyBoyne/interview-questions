
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/images");
    eleventyConfig.addPassthroughCopy("./src/assets/css");

    // eleventyConfig.addPlugin(eleventyNavigationPlugin);

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