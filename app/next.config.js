const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? process.env.PUBLIC_PATH : '',
  env: {
    PUBLIC_PATH: process.env.PUBLIC_PATH
  }
};