const { dependencies } = require('./package.json');

const RENTAL_REACT_ENDPOINT = process.env.REACT_APP_RENTAL_REACT_ENDPOINT;
const CAR_REACT_ENDPOINT = process.env.REACT_REACT_APP_CARS_REACT_ENDPOINT;

console.log("Master-stub: Rental react endpoint set to: ", RENTAL_REACT_ENDPOINT);
console.log("Master-stub: Car react endpoint set to: ", CAR_REACT_ENDPOINT);

module.exports = {
  name: "master",
  remotes: {
    rental: `rental@${RENTAL_REACT_ENDPOINT}`,
    car: `car@${CAR_REACT_ENDPOINT}`
  },
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