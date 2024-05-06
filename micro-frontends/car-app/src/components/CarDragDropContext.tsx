import React, { ReactNode, useState, useEffect } from 'react';
import { move, insert, without } from 'typescript-array-utils';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ReduxGlobalStore } from '../middleware/redux/reduxGlobalStore';

import cars from '../middleware/cars';
import ICarItem from '../models/ICarItem.type';
/* eslint-disable  no-unused-vars */
interface DragDropContextProps {
  children: ReactNode;
}

const CarDragDropContext = ({ children }: DragDropContextProps) => {
  const DROPABLE_AVAILABLE_ID = 'availableCars';
  const DROPABLE_SELECTED_ID = 'selectedCars';

  const [availableCars, setAvailableCars] = useState<ICarItem[]>(cars);
  const [selectedCars, setSelectedCars] = useState<ICarItem[]>([]);

  const moveCarInAvailableList = (indexFrom: number, indexTo: number) => {
    setAvailableCars(move(availableCars, indexFrom, indexTo));
  };

  const moveCarInSelectedList = (indexFrom: number, indexTo: number) => {
    setSelectedCars(move(selectedCars, indexFrom, indexTo));
  };

  const addCarToAvailableList = (newCar: ICarItem, index: number) => {
    setAvailableCars((prevState) => insert(prevState, index, newCar));
  };

  const addCarToSelectedList = (newCar: ICarItem, index: number) => {
    setSelectedCars((prevState) => insert(prevState, index, newCar));
  };

  const removeFromAvailableCars = (indexToREmove: number) => {
    setAvailableCars((prevState) => without(prevState, indexToREmove));
  };

  const removeFromSelectedCars = (indexToREmove: number) => {
    setSelectedCars((prevState) => without(prevState, indexToREmove));
  };

  const onDragEnd = ({ source, destination }: DropResult) => {
    let tmpCar: ICarItem | undefined;
    if (source === undefined || destination === null) return null;
    if (source?.droppableId === undefined || destination?.droppableId === undefined) return null;

    // Move within same table
    if (source?.droppableId === destination?.droppableId) {
      if (destination?.droppableId === DROPABLE_AVAILABLE_ID) {
        moveCarInAvailableList(source.index, destination.index);
      } else {
        moveCarInSelectedList(source.index, destination.index);
      }
    } else {
      // Move between different tables
      if (source.droppableId === DROPABLE_AVAILABLE_ID) {
        tmpCar = availableCars.at(source.index);
        removeFromAvailableCars(source.index);
      } else if (source.droppableId === DROPABLE_SELECTED_ID) {
        tmpCar = selectedCars.at(source.index);
        removeFromSelectedCars(source.index);
      }
      if (destination.droppableId === DROPABLE_AVAILABLE_ID && tmpCar !== undefined) {
        addCarToAvailableList(tmpCar, destination.index);
      } else if (destination.droppableId === DROPABLE_SELECTED_ID && tmpCar !== undefined) {
        addCarToSelectedList(tmpCar, destination.index);
      }
    }
    return true;
  };

  useEffect(() => {
    ReduxGlobalStore.sendCarAvailableGlobalAction(availableCars);
    ReduxGlobalStore.sendCarSelectedGlobalAction(selectedCars);
  }, [availableCars, selectedCars, children]);

  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
};

export default CarDragDropContext;
