/**
 * @description Returns a global array of all custom element templates
 * to loop through and render
 * */

const fs = require('fs');
const path = require('path');

module.exports = () => {
  const elementsDir = fs.readdirSync(
    path.resolve(process.cwd(), 'views/elements')
  );

  return elementsDir;
};
