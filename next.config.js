const path = require('path');

module.exports = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  future: {
    webpack5: true,
  },
  webpack(config/*, options*/) {
    config.resolve.alias['~'] = path.join(__dirname, 'src');

    return config
  },
};