const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? process.env.PUBLIC_PATH : '',
  env: {
    PUBLIC_PATH: isProd ?  process.env.PUBLIC_PATH : ''
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true
          }
        }
      ]
    });

    return config;
  }
};
