const Dotenv = require("dotenv-webpack");

function getConfig() {
  if (process.env.APP_ENV === 'production') {
    return '.env.production'
  } else if (process.env.APP_ENV === 'development') {
    return '.env.development'
  } else {
    return '.env.staging'
  }
}

module.exports = {
  plugins: [
    new Dotenv({
      path: getConfig()
    }),
  ],
};