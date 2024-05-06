import React, { useState } from 'react';
import AvailableCars from './components/AvailableCars';
import SelectedCars from './components/SelectedCars';
import CarDragDropContext from './components/CarDragDropContext';
import ICarItem from './models/ICarItem.type';
import { AppContainer } from './styles/Car';

const App = () => {
  /* eslint-disable-next-line no-unused-vars */
  const [selectedCars, setSelectedCars] = useState<ICarItem[]>([]);
  return (
    <AppContainer>
      <CarDragDropContext>
        <AvailableCars />
        <SelectedCars setSelectedCarsCallback={setSelectedCars} />
      </CarDragDropContext>
    </AppContainer>
  );
};

export default App;
