import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Car Rental Micro-frontend', () => {
  render(<App />);
});
