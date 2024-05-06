const cracoModuleFederation = require('craco-module-federation');
const dotenvCra = require('dotenv-cra');
process.env.NODE_ENV ??= 'production';
dotenvCra.config();

const PORT = process.env.REACT_APP_PORT;

console.log("Running car-micro-frontend CRA as: ", process.env.NODE_ENV, " on port", PORT);

module.exports = {
  devServer: {
    port: PORT,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
