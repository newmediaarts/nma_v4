const path = require('path');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
  eleventyConfig.addWatchTarget('src');

  return {
    dir: {
      input: './pages',
      layouts: '../views',
      includes: '../includes',
      data: '../data',
    },
  };
};
