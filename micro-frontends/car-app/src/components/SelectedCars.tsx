import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ICarItem from '../models/ICarItem.type';
import ICarContextState from '../models/ICarsContextState.type';

import DroppableCarsArea from './DroppableCarsArea';
import { StyledColumns } from '../styles/Car';
import { ReduxGlobalStore } from '../middleware/redux/reduxGlobalStore';

interface SelectedCarsProps {
  /* eslint-disable-next-line no-unused-vars */
  setSelectedCarsCallback: (carsParam: ICarItem[]) => void;
}

const SelectedCars = ({ setSelectedCarsCallback }: SelectedCarsProps) => {
  const DROPABLE_SELECTED_ID = 'selectedCars';

  const [selectedCars, setSelectedCars] = useState<ICarItem[]>([]);

  const selectedCarsStateChanged = (stateChanged: ICarContextState) => {
    setSelectedCars(stateChanged.selectedCars);
    setSelectedCarsCallback(stateChanged.selectedCars);
  };

  ReduxGlobalStore.subscribeOnCarAction(selectedCarsStateChanged);

  return (
    <StyledColumns>
      <DroppableCarsArea cars={selectedCars} droppableId={DROPABLE_SELECTED_ID} />
    </StyledColumns>
  );
};

export default SelectedCars;
