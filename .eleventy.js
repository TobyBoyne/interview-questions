const katex = require('katex')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/images");
    eleventyConfig.addPassthroughCopy("./src/assets/css");
    eleventyConfig.addPassthroughCopy("./src/assets/js");

    // 11tydata.json files add tags instead of replace them
    eleventyConfig.setDataDeepMerge(true);

    // Question as shortcode
    eleventyConfig.addPairedShortcode("question", function(content) {
        let qha = content.split('###')
        return `<section class="question-part">
            <div class="question">${qha[0]}</div>
            <div class="hint">${qha[1]}</div>
            <div class="answer">${qha[2]}</div>
        </section>`});

    
    // Add playlists to collections
    const playlists = require('./src/_data/playlists.json')
    for (let playlistid in playlists) {
        let playlist = playlists[playlistid]

        eleventyConfig.addCollection(playlistid, function(collectionApi) {
            return collectionApi.getAll().filter(function(a) {
                return playlist.questions.includes(a.data.title)
            }).sort(function(a, b) {
                return playlist.questions.indexOf(a.data.title) - playlist.questions.indexOf(b.data.title)
            });
        });
    };

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