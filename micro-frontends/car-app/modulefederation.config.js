const { dependencies } = require('./package.json');

const CAR_REACT_ENDPOINT = 'carRemoteEntry.js';

module.exports = {
  name: 'car',
  exposes: {
    './CarDragDropContext': './src/components/CarDragDropContext',
    './AvailableCars': './src/components/AvailableCars',
    './SelectedCars': './src/components/SelectedCars',
  },
  filename: CAR_REACT_ENDPOINT,
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
