import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ICarItem from '../models/ICarItem.type';
import ICarsContextState from '../models/ICarsContextState.type';

import DroppableCarsArea from './DroppableCarsArea';
import { StyledColumns } from '../styles/Car';
import { ReduxGlobalStore } from '../middleware/redux/reduxGlobalStore';

const AvailableCars = () => {
  const DROPABLE_AVAILABLE_ID = 'availableCars';

  const [availableCars, setAvailableCars] = useState<ICarItem[]>([]);

  const availableCarsStateChanged = (stateChanged: ICarsContextState) => {
    setAvailableCars(stateChanged.availableCars);
  };

  ReduxGlobalStore.subscribeOnCarAction(availableCarsStateChanged);

  return (
    <StyledColumns>
      <DroppableCarsArea cars={availableCars} droppableId={DROPABLE_AVAILABLE_ID} />
    </StyledColumns>
  );
};

export default AvailableCars;
