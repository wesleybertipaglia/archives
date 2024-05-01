module.exports = function (eleventyConfig) {
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addPassthroughCopy({
        "src/_assets": "assets"
    });

    return {
        passthroughFileCopy: true,

        dir: {
            input: 'src/_views',
            output: 'dist',
            includes: '../_includes',
            layouts: '../_layouts',
            data: '../_data',
        },
    };
};
