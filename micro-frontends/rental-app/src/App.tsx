import React from 'react';

import CarRental from './components/CarRental';
import { AppContainer } from './styles/CarRental.styles';

const App = () => (
  <AppContainer>
    <CarRental businessPartnerId={0} />
  </AppContainer>
);

export default App;
