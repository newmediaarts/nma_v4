const path = require('path');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('src');
  eleventyConfig.addPassthroughCopy({ 'src/assets/': 'assets' });

  return {
    dir: {
      input: './pages',
      layouts: '../views',
      includes: '../includes',
      data: '../data',
    },
  };
};
