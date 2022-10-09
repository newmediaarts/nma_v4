const fs = require('fs');
const path = require('path');

// Design token config file path
const tokenFile = path.join(process.cwd(), 'tokens.json');
// SCSS variable file path
const sassVariablePath = path.join(process.cwd(), 'src/scss/tokens.scss');

function readTokenFile() {
  const json = JSON.parse(fs.readFileSync(tokenFile));

  createTokens(json);
}

function createTokens(tokenData) {
  let tokens = [
    `/* ------------------------------------------------------------------------------------ 
    THIS IS AUTOMATICALLY GENERATED. IF YOU NEED TO CHANGE / UPDATE TOKENS USE THE JSON FILE 
------------------------------------------------------------------------------------------ */`,
    '',
  ];

  // The first nested element in the json (ex. color)
  const tokenPrefixes = Object.keys(tokenData);

  tokenPrefixes.map((prefix) => {
    // Values nested in the prefix (ex. white)
    const tokenKeys = Object.keys(tokenData[prefix]);

    tokenKeys.map((key, index) => {
      // Add prefix name comment if it is the first key
      if (index === 0) {
        tokens.push(`/* ${prefix} */`);
      }

      // Get the nested value of the token
      const tokenValue = tokenData[prefix][key];

      // Generate the variable string
      const tokenString = createSassVariable(prefix, key, tokenValue);
      tokens.push(tokenString);

      // Add a space between new variable prefixes
      if (index === tokenKeys.length - 1) {
        tokens.push('');
      }
    });
  });

  // Write the variables to the tokens file
  const tokensFileContents = tokens.join('\r\n');

  fs.writeFileSync(sassVariablePath, tokensFileContents);
}

function createSassVariable(prefix, key, value) {
  return `$${prefix}-${key}: ${value};`;
}

readTokenFile();
