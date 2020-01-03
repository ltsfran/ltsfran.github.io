const path = require('path');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const rootPath = path.join(__dirname, '../../');

const fs = require('fs');
const dotenvLocal = path.join(rootPath, '/.env.local');

exports.createVarsDefinePlugin = () => {
  const newVars = {};
  let envConfig = dotenvExpand(dotenv.config()).parsed;
  try{
    envConfig = {...envConfig, ...dotenv.parse(fs.readFileSync(dotenvLocal))};
  } catch(e) {
    // throw new Error(e);
  }

  for (let k in envConfig) {
    newVars['process.env.' + k] = JSON.stringify(envConfig[k]);
  }
  return newVars;
}

exports.dotenvOverride = () => {
  dotenv.config();
  if(!process.env.NODE_ENV){
    try {
      const envConfig = dotenv.parse(fs.readFileSync(dotenvLocal));
      for (let k in envConfig) {
          process.env[k] = envConfig[k]
      }
    } catch(e){
      // throw new Error(e);
    }
  }
}
