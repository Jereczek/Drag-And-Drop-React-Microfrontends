const { dependencies } = require('./package.json');

const CAR_RENTAL_REACT_ENDPOINT = 'carRentalRemoteEntry.js';
const CARS_REACT_ENDPOINT = process.env.REACT_APP_TERMINAL_REACT_ENDPOINT;

console.log("CarRental-app: Cars react endpoint set to: ", CARS_REACT_ENDPOINT);

module.exports = {
  name: 'rental',
  exposes: {
    './CarRental': './src/components/CarRental',
  },
  remotes: {
    car: `car@${CARS_REACT_ENDPOINT}`
  },
  filename: CAR_RENTAL_REACT_ENDPOINT,
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
