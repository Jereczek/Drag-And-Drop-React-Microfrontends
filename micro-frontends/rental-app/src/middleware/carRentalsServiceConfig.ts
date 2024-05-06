import axios from 'axios';

console.log('car-rental-app: Backend endpoint set to: ', process.env.REACT_APP_BACKEND_ENDPOINT);

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
    /* eslint-disable-next-line max-len */
    Authorization: 'Bearer 123',
  },
});
